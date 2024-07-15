import { useState } from "react";
import useSWR from "swr";
import { groupBy, healthchecksioFetcher, removePrefix, removeSuffix } from "./utils";
import { STATUS_SYMBOLS } from "./constants";
import { StatusSummary } from "./summary";
import { OptionGroup } from "./option-group";

// A subset of the Healthchecks.io check data
// The full data structure can be found at https://healthchecks.io/docs/api/
// Derived from https://github.com/WATonomous/watcloud-website/blob/65fe54a1af868f5a173ce431fc7e66f9745b7fed/lib/utils.ts#L118-L131
export type HealthchecksioCheckStatus = "new" | "up" | "grace" | "down" | "paused";
export type HealthchecksioCheck = {
  name: string;
  slug: string;
  tags: string;
  desc: string;
  grace: number;
  n_pings: number;
  status: HealthchecksioCheckStatus;
  started: boolean;
  last_ping: string;
  tags_dict: Record<string, string>;
}

function processHCData(data: any): HealthchecksioCheck[] | undefined {
  if (!data) {
    return undefined;
  }
  return data.checks?.map((check: any) => {
    const tags = check.tags.split(' ');

    const tagsDict: Record<string, string> = {};
    for (const tag of tags) {
      if (!tag.includes('=')) {
        continue;
      }
      const [key, value] = tag.split('=');
      tagsDict[key] = value;
    }

    return {
      ...check,
      tags_dict: tagsDict,
    };
  });
}

function getStatusSymbol(status: HealthchecksioCheckStatus) {
  return {
    new: STATUS_SYMBOLS.neutral,
    up: STATUS_SYMBOLS.good,
    grace: STATUS_SYMBOLS.good,
    down: STATUS_SYMBOLS.bad,
    paused: '⏸️',
  }[status];
}

function CheckStatus({ status }: { status: HealthchecksioCheckStatus }) {
  return (
    <span role="img" aria-label={status}>
      {getStatusSymbol(status)}
    </span>
  );
}

const GROUP_KEYS = ['host', 'check'] as const;
function shortenCheckName(groupKey: typeof GROUP_KEYS[number], groupName: string, name: string) {
  if (groupKey === 'host') {
    return removePrefix(name, `${groupName}-`);
  }
  if (groupKey === 'check') {
    return removeSuffix(name, `-${groupName}`);
  }
  return name;
}

export function HealthchecksioStatus({ showInternal, initialGroupKey = "" }: { showInternal?: boolean, initialGroupKey?: string }) {
  const [groupKey, setGroupKey] = useState((initialGroupKey in GROUP_KEYS ? initialGroupKey : GROUP_KEYS[0]) as typeof GROUP_KEYS[number]);
  const { data: dataRaw, error, isLoading } = useSWR('/api/v3/checks/', healthchecksioFetcher, { refreshInterval: 10000 });

  const checks = (processHCData(dataRaw) || []).filter(check => check.tags_dict.public !== 'False' || showInternal);
  const groupedChecks = groupBy(checks, c => c.tags_dict[groupKey]);

  return (
    <div className="my-4">
      {isLoading && <p className='text-gray-500'>Loading...</p>}
      {error && <p className='text-red-500'>Error: {error.message}</p>}
      {checks && checks.length > 0 && (
        <>
          <StatusSummary symbols={checks.map(check => getStatusSymbol(check.status))} symbolClassName="text-xl" className="mb-4" />
          <div>
            <span className="text-sm text-gray-500 flex items-center justify-center mb-1">Group by:</span>
            <OptionGroup
              options={GROUP_KEYS}
              selected={groupKey}
              onChange={setGroupKey}
              className="mb-4"
              optionClassName="text-gray-900 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              selectedClassName="bg-blue-500 text-white"
            />
          </div>
          <div className="grid px-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {Object.entries(groupedChecks).sort().map(([group, checks]) => (
              <div key={group} className="border p-4">
                <h4 className="text-lg">{group}</h4>
                <ul>
                  {checks.map(check => (
                    <li key={check.name} className="flex justify-between">
                      <span>{shortenCheckName(groupKey, group, check.name)}</span>
                      <CheckStatus status={check.status} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}