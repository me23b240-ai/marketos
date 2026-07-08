// components/compare/compare-selector.tsx
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  // components/compare/compare-selector.tsx (native <select> fallback)
interface CompareSelectorProps {
    label: string;
    companies: string[];
    defaultValue?: string;
  }
  
  export function CompareSelector({
    label,
    companies,
    defaultValue,
  }: CompareSelectorProps) {
    return (
      <div className="flex w-full flex-col gap-1.5">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <select
          defaultValue={defaultValue ?? companies[0]}
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>
    );
  }