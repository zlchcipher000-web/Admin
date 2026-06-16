import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import KpiCard from '@/components/KpiCard';
import TabBar from '@/components/TabBar';
import DonutChart from '@/components/DonutChart';
import StatusBadge from '@/components/StatusBadge';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  Wallet, CreditCard, ArrowUpRight, AlertCircle,
} from 'lucide-react';
import { weeklyEarnings, donutEarnings, transactions } from '@/data/mockData';

const formatCurrency = (v: number) => `P${(v / 1000).toFixed(0)}K`;

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Transactions', value: 'transactions' },
  { label: 'Tutor Earnings', value: 'tutor-earnings' },
  { label: 'Revenue', value: 'revenue' },
];

export default function EarningsAndTransactionsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Earnings & Transactions"
        subtitle="Track platform earnings, transactions, and financial overview."
        dateRange="May 2, 2026 - June 2, 2026"
      />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <KpiCard label="Total Earnings" value="P642,800" trend="+12.5% vs last month" trendUp index={0} icon={<Wallet className="w-4 h-4" />} />
        <KpiCard label="Platform Revenue" value="P130,500" trend="+18.6% vs last month" trendUp index={1} icon={<CreditCard className="w-4 h-4" />} />
        <KpiCard label="Total Payouts" value="P512,300" trend="+12.3% vs last month" trendUp index={2} icon={<ArrowUpRight className="w-4 h-4" />} />
        <KpiCard label="Pending Payouts" value="P45,600" trend="-2.1% vs last month" trendUp={false} index={3} icon={<AlertCircle className="w-4 h-4" />} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Earnings Trend */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Earnings Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyEarnings}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="payouts" name="Payouts" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Earnings Breakdown */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Earnings Breakdown</h3>
          <DonutChart data={donutEarnings} centerValue="P642,800" centerLabel="Total Earnings" />
          <div className="flex justify-center gap-6 mt-2">
            {donutEarnings.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-[11px] text-textSecondary">{d.name}</span>
                <span className="text-[11px] font-medium text-textPrimary">{((d.value / 642800) * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-cardBorder rounded-lg shadow-xs">
        <div className="flex items-center justify-between px-4 py-3 border-b border-divider">
          <h3 className="text-[14px] font-semibold text-textPrimary">Recent Transactions</h3>
          <button className="text-[11px] text-accentBlue hover:underline">View All Transactions</button>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Date</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Transaction ID</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Description</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Type</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Amount</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 text-textSecondary">{t.date}</td>
                <td className="px-4 py-3 font-medium text-textPrimary">{t.transactionId}</td>
                <td className="px-4 py-3 text-textSecondary">{t.description}</td>
                <td className="px-4 py-3 text-textSecondary">{t.type}</td>
                <td className="px-4 py-3 text-textPrimary font-medium">P{t.amount.toLocaleString()}</td>
                <td className="px-4 py-3"><StatusBadge status={t.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
