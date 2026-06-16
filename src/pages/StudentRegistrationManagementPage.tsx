import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Check, X, Eye } from 'lucide-react';
import { studentRequests } from '@/data/mockData';

const tabs = [
  { label: 'All Students', value: 'all' },
  { label: 'Pending Approval', value: 'pending', badge: 24 },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' },
];

export default function StudentRegistrationManagementPage() {
  const [activeTab, setActiveTab] = useState('pending');

  const filtered = studentRequests.filter((r) => {
    if (activeTab === 'all') return true;
    return r.status === activeTab;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Student Registration Management"
        subtitle="Manage student registrations from universities."
      />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar searchPlaceholder="Search student name, email, or university...">
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All Universities</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All Status</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Sort by: Newest</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Student</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">University</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Course</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Year Level</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Requested On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{r.student}</td>
                <td className="px-4 py-3 text-textSecondary">{r.university}</td>
                <td className="px-4 py-3 text-textSecondary">{r.course}</td>
                <td className="px-4 py-3 text-textSecondary">{r.yearLevel}</td>
                <td className="px-4 py-3 text-textSecondary">{r.requestedOn}</td>
                <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-accentBlue hover:opacity-80">
                      <Eye className="w-4 h-4" />
                    </button>
                    {r.status === 'pending' && (
                      <>
                        <button className="flex items-center gap-1 px-2 py-1 text-[11px] text-white bg-accentGreen rounded hover:bg-accentGreen/90">
                          <Check className="w-3 h-3" /> Approve
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 text-[11px] text-white bg-accentRed rounded hover:bg-accentRed/90">
                          <X className="w-3 h-3" /> Reject
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-divider">
          <span className="text-[11px] text-textSecondary">Showing 1 to {filtered.length} of {filtered.length} pending requests</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-textPrimary">24</div>
          <div className="text-[12px] text-textSecondary mt-1">Pending</div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-textPrimary">1,856</div>
          <div className="text-[12px] text-textSecondary mt-1">Approved (This Month)</div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-textPrimary">56</div>
          <div className="text-[12px] text-textSecondary mt-1">Rejected (This Month)</div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-accentGreen">97.1%</div>
          <div className="text-[12px] text-textSecondary mt-1">Approval Rate</div>
        </div>
      </div>
    </div>
  );
}
