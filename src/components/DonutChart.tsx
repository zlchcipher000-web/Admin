import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DonutChartProps {
  data: { name: string; value: number; color: string }[];
  centerLabel?: string;
  centerValue?: string;
}

export default function DonutChart({ data, centerLabel, centerValue }: DonutChartProps) {
  return (
    <div className="relative w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {(centerValue || centerLabel) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {centerValue && (
            <span className="text-[18px] font-bold text-textPrimary">{centerValue}</span>
          )}
          {centerLabel && (
            <span className="text-[11px] text-textSecondary">{centerLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}
