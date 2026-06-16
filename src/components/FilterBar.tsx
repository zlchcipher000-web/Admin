import { Search, Download } from 'lucide-react';
import { type ReactNode } from 'react';

interface FilterBarProps {
  searchPlaceholder?: string;
  children?: ReactNode;
  onSearch?: (value: string) => void;
}

export default function FilterBar({ searchPlaceholder = 'Search...', children, onSearch }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textTertiary" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full pl-9 pr-3 py-2 text-[13px] bg-white border border-inputBorder rounded-md
            placeholder:text-textTertiary focus:outline-none focus:border-textPrimary transition-colors"
        />
      </div>
      {children}
      <button className="flex items-center gap-1.5 px-3 py-2 text-[13px] text-textSecondary bg-white border border-cardBorder rounded-md hover:bg-gray-50 transition-colors">
        <Download className="w-4 h-4" />
        Export
      </button>
    </div>
  );
}
