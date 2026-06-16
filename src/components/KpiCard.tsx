import { TrendingUp, TrendingDown } from 'lucide-react';

interface KpiCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon?: React.ReactNode;
  index?: number;
}

export default function KpiCard({ label, value, trend, trendUp, icon, index = 0 }: KpiCardProps) {
  return (
    <div
      className={`bg-white border border-cardBorder rounded-lg p-4 shadow-xs hover:shadow-sm transition-shadow duration-200 opacity-0 animate-fade-in stagger-${index + 1}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] text-textSecondary">{label}</span>
        {icon && <span className="text-textTertiary">{icon}</span>}
      </div>
      <div className="text-[24px] font-bold text-textPrimary tracking-tight">{value}</div>
      <div className={`flex items-center gap-1 mt-1 text-[11px] ${trendUp ? 'text-accentGreen' : 'text-accentRed'}`}>
        {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        <span>{trend}</span>
      </div>
    </div>
  );
}
