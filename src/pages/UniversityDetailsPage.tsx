import { useNavigate, useParams } from 'react-router-dom';
import StatusBadge from '@/components/StatusBadge';
import KpiCard from '@/components/KpiCard';
import { ArrowLeft, Pencil, Users, GraduationCap, BookOpen, Wallet, Pause, UserCircle } from 'lucide-react';
import { universities, universityAdmins } from '@/data/mockData';

export default function UniversityDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const university = universities.find((u) => u.id === id) || universities[2]; // Default to DLSU

  return (
    <div className="opacity-0 animate-fade-in">
      {/* Back Navigation */}
      <button
        onClick={() => navigate('/universities')}
        className="flex items-center gap-1.5 text-[13px] text-accentBlue hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* University Header */}
      <div className="bg-white border border-cardBorder rounded-lg p-6 shadow-xs mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[16px] font-bold flex-shrink-0" style={{ backgroundColor: university.logoColor }}>
            {university.initials}
          </div>
          <div className="flex-1">
            <h1 className="text-[20px] font-bold text-textPrimary">{university.name}</h1>
            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
              <span className="text-[12px] text-textSecondary">Joined On: {university.joinedOn}</span>
              <StatusBadge status={university.status} />
              <span className="text-[12px] text-textSecondary">Domain: {university.domain}</span>
              <span className="text-[12px] text-textSecondary">Country: {university.country}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <KpiCard label="Students" value={university.students.toLocaleString()} trend="+12.4%" trendUp index={0} icon={<GraduationCap className="w-4 h-4" />} />
        <KpiCard label="Tutors" value={university.tutors.toLocaleString()} trend="+8.8%" trendUp index={1} icon={<Users className="w-4 h-4" />} />
        <KpiCard label="Sessions" value={university.sessions.toLocaleString()} trend="+9.2%" trendUp index={2} icon={<BookOpen className="w-4 h-4" />} />
        <KpiCard label="Total Earnings" value={`P${university.earnings.toLocaleString()}`} trend="+14.2%" trendUp index={3} icon={<Wallet className="w-4 h-4" />} />
      </div>

      {/* Contact & Actions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Contact Information */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Contact Information</h3>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">Contact Person</span>
              <span className="text-[12px] font-medium text-textPrimary">{university.contactPerson}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">Email</span>
              <span className="text-[12px] font-medium text-textPrimary">{university.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">Phone</span>
              <span className="text-[12px] font-medium text-textPrimary">{university.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textSecondary">Address</span>
              <span className="text-[12px] font-medium text-textPrimary text-right">{university.address}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Actions</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-textPrimary border border-inputBorder rounded-md hover:bg-gray-50 transition-colors">
              <Pencil className="w-4 h-4" /> Edit University Information
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-textPrimary border border-inputBorder rounded-md hover:bg-gray-50 transition-colors">
              <Users className="w-4 h-4" /> Manage University Admins
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-textPrimary border border-inputBorder rounded-md hover:bg-gray-50 transition-colors">
              <UserCircle className="w-4 h-4" /> View Students
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-textPrimary border border-inputBorder rounded-md hover:bg-gray-50 transition-colors">
              <GraduationCap className="w-4 h-4" /> View Tutors
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-accentRed border border-accentRed/30 rounded-md hover:bg-accentRed/5 transition-colors">
              <Pause className="w-4 h-4" /> Suspend University
            </button>
          </div>
        </div>
      </div>

      {/* Recent University Admins */}
      <div className="bg-white border border-cardBorder rounded-lg shadow-xs">
        <div className="px-4 py-3 border-b border-divider">
          <h3 className="text-[14px] font-semibold text-textPrimary">Recent University Admins</h3>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Name</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Email</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Role</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Added On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
            </tr>
          </thead>
          <tbody>
            {universityAdmins.map((a, i) => (
              <tr key={i} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{a.name}</td>
                <td className="px-4 py-3 text-textSecondary">{a.email}</td>
                <td className="px-4 py-3 text-textSecondary">{a.role}</td>
                <td className="px-4 py-3 text-textSecondary">{a.addedOn}</td>
                <td className="px-4 py-3"><StatusBadge status={a.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
