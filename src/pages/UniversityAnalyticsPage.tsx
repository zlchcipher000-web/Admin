import PageHeader from '@/components/PageHeader';
import KpiCard from '@/components/KpiCard';
import DonutChart from '@/components/DonutChart';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts';
import {
  GraduationCap, Users, BookOpen, Wallet,
  Star, Clock, CheckCircle, UserCheck,
} from 'lucide-react';
import { donutEngagement, analyticsSubjects } from '@/data/mockData';

const sessionsOverTime = [
  { date: 'May 2', sessions: 80 },
  { date: 'May 9', sessions: 95 },
  { date: 'May 16', sessions: 110 },
  { date: 'May 23', sessions: 125 },
  { date: 'May 30', sessions: 140 },
  { date: 'Jun 2', sessions: 130 },
];

export default function UniversityAnalyticsPage() {
  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="University Analytics"
        subtitle="Detailed analytics and performance metrics by university."
        dateRange="May 2, 2026 - June 2, 2026"
      />

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <KpiCard label="Students" value="2,145" trend="+12.4%" trendUp index={0} icon={<GraduationCap className="w-4 h-4" />} />
        <KpiCard label="Tutors" value="956" trend="+8.8%" trendUp index={1} icon={<Users className="w-4 h-4" />} />
        <KpiCard label="Sessions" value="1,245" trend="+9.2%" trendUp index={2} icon={<BookOpen className="w-4 h-4" />} />
        <KpiCard label="Earnings" value="P128,450" trend="+14.2%" trendUp index={3} icon={<Wallet className="w-4 h-4" />} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Sessions Over Time */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Sessions Over Time</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sessionsOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Line type="monotone" dataKey="sessions" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Subjects */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Top Subjects (by Sessions)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={analyticsSubjects} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis dataKey="subject" type="category" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} width={90} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }} />
              <Bar dataKey="sessions" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Student Engagement */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Student Engagement</h3>
          <DonutChart data={donutEngagement} centerValue="82%" centerLabel="Active Students" />
        </div>
      </div>

      {/* Bottom Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-cardBorder rounded-lg p-4 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-accentPurple/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-accentPurple" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-textPrimary">4.8 / 5</div>
            <div className="text-[11px] text-textSecondary">Avg. Session Rating</div>
          </div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-accentGreen/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-accentGreen" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-textPrimary">2.3 hrs</div>
            <div className="text-[11px] text-textSecondary">Response Time</div>
          </div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-accentBlue/10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-accentBlue" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-textPrimary">91.2%</div>
            <div className="text-[11px] text-textSecondary">Completion Rate</div>
          </div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-accentAmber/10 flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-accentAmber" />
          </div>
          <div>
            <div className="text-[18px] font-bold text-textPrimary">68.4%</div>
            <div className="text-[11px] text-textSecondary">Retention Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
