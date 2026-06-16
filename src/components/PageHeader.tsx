import { type ReactNode } from 'react';
import { Bell, Settings } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  dateRange?: string;
}

export default function PageHeader({ title, subtitle, children, dateRange }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
      <div>
        <h1 className="text-[16px] font-semibold text-textPrimary">{title}</h1>
        <p className="text-[12px] text-textSecondary mt-0.5">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        {dateRange && (
          <span className="text-[12px] text-textSecondary bg-white border border-cardBorder rounded-md px-3 py-1.5">
            {dateRange}
          </span>
        )}
        <button className="p-1.5 text-textTertiary hover:text-textPrimary transition-colors">
          <Bell className="w-4 h-4" />
        </button>
        <button className="p-1.5 text-textTertiary hover:text-textPrimary transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>
  );
}
