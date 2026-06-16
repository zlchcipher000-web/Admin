import PageHeader from '@/components/PageHeader';
import KpiCard from '@/components/KpiCard';
import DonutChart from '@/components/DonutChart';
import StatusBadge from '@/components/StatusBadge';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  Building2, Users, GraduationCap, BookOpen,
  Wallet, CreditCard, AlertCircle,
} from 'lucide-react';
import {
  monthlyRevenue, donutEarnings, donutUsers, platformActivity,
  recentRegistrations, topSubjects,
} from '@/data/mockData';

const formatCurrency = (v: number) => `P${(v / 1000).toFixed(0)}K`;

export default function DashboardPage() {
  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Dashboard"
        subtitle="Overview of platform performance and key metrics."
        dateRange="June 2, 2026"
      />

      {/* KPI Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label="Total Universities" value="68" trend="+12.5% vs last month" trendUp index={0} icon={<Building2 className="w-4 h-4" />} />
        <KpiCard label="Total Users" value="24,580" trend="+18.6% vs last month" trendUp index={1} icon={<Users className="w-4 h-4" />} />
        <KpiCard label="Active Tutors" value="8,245" trend="+15.2% vs last month" trendUp index={2} icon={<GraduationCap className="w-4 h-4" />} />
        <KpiCard label="Active Students" value="16,335" trend="+14.7% vs last month" trendUp index={3} icon={<BookOpen className="w-4 h-4" />} />
      </div>

      {/* KPI Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <KpiCard label="Total Sessions" value="12,856" trend="+16.3% vs last month" trendUp index={4} icon={<BookOpen className="w-4 h-4" />} />
        <KpiCard label="Total Earnings" value="P642,800" trend="+12.5% vs last month" trendUp index={5} icon={<Wallet className="w-4 h-4" />} />
        <KpiCard label="Platform Revenue" value="P130,500" trend="+18.6% vs last month" trendUp index={6} icon={<CreditCard className="w-4 h-4" />} />
        <KpiCard label="Pending Payouts" value="P45,600" trend="-2.1% vs last month" trendUp={false} index={7} icon={<AlertCircle className="w-4 h-4" />} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        {/* Platform Overview Line Chart */}
        <div className="lg:col-span-1 bg-white border border-cardBorder rounded-lg p-4 shadow-xs opacity-0 animate-fade-in stagger-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[14px] font-semibold text-textPrimary">Platform Overview</h3>
            <select className="text-[11px] border border-inputBorder rounded px-2 py-1 text-textSecondary bg-white">
              <option>This Month</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(value: number) => [`P${value.toLocaleString()}`, '']}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="payouts" name="Payouts" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Earnings Breakdown Donut */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs opacity-0 animate-fade-in stagger-5">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Earnings Breakdown</h3>
          <DonutChart
            data={donutEarnings}
            centerValue="P642,800"
            centerLabel="Total Earnings"
          />
          <div className="flex justify-center gap-4 mt-2">
            {donutEarnings.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-[11px] text-textSecondary">{d.name}</span>
                <span className="text-[11px] font-medium text-textPrimary">{((d.value / 642800) * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Distribution Donut */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs opacity-0 animate-fade-in stagger-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[14px] font-semibold text-textPrimary">User Distribution</h3>
            <select className="text-[11px] border border-inputBorder rounded px-2 py-1 text-textSecondary bg-white">
              <option>This Month</option>
            </select>
          </div>
          <DonutChart
            data={donutUsers}
            centerValue="24,580"
            centerLabel="Total Users"
          />
          <div className="flex justify-center gap-4 mt-2">
            {donutUsers.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-[11px] text-textSecondary">{d.name}</span>
                <span className="text-[11px] font-medium text-textPrimary">{((d.value / 24580) * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
        {/* Recent Registrations */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs opacity-0 animate-fade-in stagger-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[14px] font-semibold text-textPrimary">Recent Registrations</h3>
            <button className="text-[11px] text-accentBlue hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentRegistrations.map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0" style={{ backgroundColor: r.color }}>
                  {r.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium text-textPrimary truncate">{r.name}</div>
                  <div className="text-[11px] text-textSecondary">{r.role} · {r.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Subjects */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs opacity-0 animate-fade-in stagger-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[14px] font-semibold text-textPrimary">Top Subjects (by Sessions)</h3>
            <select className="text-[11px] border border-inputBorder rounded px-2 py-1 text-textSecondary bg-white">
              <option>This Month</option>
            </select>
          </div>
          <div className="space-y-2.5">
            {topSubjects.map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] text-textPrimary">{s.subject}</span>
                  <span className="text-[11px] text-textSecondary">{s.sessions} ({s.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-accentBlue h-1.5 rounded-full transition-all" style={{ width: `${s.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs opacity-0 animate-fade-in stagger-6">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">System Health</span>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-textPrimary">99.08%</span>
                <StatusBadge status="active" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">Active Users</span>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-textPrimary">1,245</span>
                <StatusBadge status="active" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">Avg Response Time</span>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-textPrimary">128ms</span>
                <StatusBadge status="active" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">System Uptime</span>
              <span className="text-[12px] text-textPrimary font-medium">99.98% This Month</span>
            </div>
          </div>
        </div>

        {/* Platform Activity */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs opacity-0 animate-fade-in stagger-6">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Platform Activity (This Month)</h3>
          <div className="space-y-3">
            {platformActivity.map((a, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[12px] text-textSecondary">{a.label}</span>
                <span className="text-[13px] font-semibold text-textPrimary">{a.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
