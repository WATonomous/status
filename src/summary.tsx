import { Status, STATUS_SYMBOLS } from "./constants";
import { cn } from "./utils";

export function StatusSummary({ statuses, className, symbolClassName }: {
  statuses: string[], className?: string, symbolClassName?: string
}) {
  const summary = statuses.reduce((acc, status) => {
    if (Object.values(Status).includes(status as any)) {
      acc[status as Status]++;
    }
    return acc;
  }, Object.fromEntries(Object.values(Status).map(status => [status, 0])) as Record<Status, number>);

  return (
    <div className={cn("flex space-x-4 justify-center", className)}>
      {Object.entries(summary).map(([status, count]) => (
        <div key={status} className="flex items-center">
          <span title={status} className={cn("text-2xl", symbolClassName)}>{STATUS_SYMBOLS[status as Status]}</span>
          <span className="ml-2">{count}</span>
        </div>
      ))}
    </div>
  );
}