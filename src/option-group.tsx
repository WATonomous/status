import { cn } from "./utils";

export function OptionGroup<OptionType extends string>({
  options,
  selected,
  onChange,
  className,
  optionClassName,
  selectedClassName
}: {
  options: readonly OptionType[];
  selected: OptionType;
  onChange: (option: OptionType) => void;
  className?: string;
  optionClassName?: string;
  selectedClassName?: string;
}) {
  return (
    <div className={className}>
      {options.map((option, idx) => (
        <button
          key={idx}
          className={cn(
            "text-sm px-2 py-1",
            idx === 0 && "border rounded-s-md",
            idx === options.length - 1 && "border-t border-b border-r rounded-e-md",
            0 < idx && idx < options.length - 1 && "border-t border-b border-r",
            option === selected ? selectedClassName : optionClassName
          )}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}