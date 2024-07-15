import { STATUS_SYMBOLS } from "./constants";
import { cn } from "./utils";

export function StatusSummary({ symbols, className, symbolClassName }: {
  symbols: string[], className?: string, symbolClassName?: string
}) {
  const summary = Object.fromEntries(Object.values(STATUS_SYMBOLS).map(symbol => [symbol, 0]));
  for (const symbol of symbols) {
    if (symbol in summary) {
      summary[symbol] += 1;
    }
  }

  return (
    <div className={cn("flex space-x-4 justify-center", className)}>
      {Object.entries(summary).map(([symbol, count]) => (
        <div key={symbol} className="flex items-center">
          <span role="img" aria-label={'good'} className={cn("text-2xl", symbolClassName)}>{symbol}</span>
          <span className="ml-2">{count}</span>
        </div>
      ))}
    </div>
  );
}