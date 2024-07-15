import useSWR from "swr";
import { sentryFetcher, timeSinceShort } from "./utils";
import { STATUS_SYMBOLS, Status } from "./constants";
import { StatusSummary } from "./summary";

// The API docs just says "string" lol. We can add to this list if we find more
export type SentryStatus = "ok" | "error";

function getStatus(status: SentryStatus) {
  return {
    ok: Status.Good,
    error: Status.Bad,
  }[status] || Status.Neutral;
}

function getStatusSymbol(status: SentryStatus) {
  return STATUS_SYMBOLS[getStatus(status)];
}

export function SentryStatus() {
  const { data: monitors, error, isLoading } = useSWR('/api/0/organizations/watonomous/monitors/', sentryFetcher, { refreshInterval: 5000, refreshWhenOffline: true });

  // process data
  if (monitors) {
    for (const monitor of monitors) {
      // Remove checks for the dev environment
      monitor.environments = monitor.environments?.filter((environment: any) => environment.name != 'dev').sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
    monitors.sort((a: any, b: any) => a.name.localeCompare(b.name));
  }

  const errorHelp = error?.toString() == "TypeError: Failed to fetch" ? "Is the request blocked by an adblocker?" : "Please see the console for more information.";

  return (
    <div className="my-4">
      {isLoading && <p className='text-gray-500'>Loading...</p>}
      {error && <p className='text-red-500'>Error: {error.message}. {errorHelp}</p>}
      {monitors && monitors.length > 0 && (
        <>
          <StatusSummary statuses={monitors.flatMap((monitor: any) => monitor.environments?.map((environment: any) => getStatus(environment.status)))} symbolClassName="text-xl" className="mb-4" />
          <div className="grid px-8 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-4">
            {monitors.map((monitor: any) => (
              <div key={monitor.id} className="border p-4">
                <h4 className="text-lg">{monitor.name}</h4>
                <ul>
                  {monitor.environments?.map((environment: any) => (
                    <li key={environment.name} className="flex justify-between">
                      <span>{environment.name} <span className="text-sm text-gray-500" aria-label="last update time"
                        title={`Last updated at ${environment.lastCheckIn}`}>{timeSinceShort(new Date(environment.lastCheckIn))} ago</span></span>
                      <span title={environment.status}>{getStatusSymbol(environment.status)}</span>
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