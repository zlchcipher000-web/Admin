import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import { Check, X, Eye } from 'lucide-react';
import { tutorRequests } from '@/data/mockData';

const tabs = [
  { label: 'Pending', value: 'pending', badge: 32 },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' },
  { label: 'All', value: 'all' },
];

export default function TutorRegistrationRequestsPage() {
  const [activeTab, setActiveTab] = useState('pending');

  const filtered = tutorRequests.filter((r) => {
    if (activeTab === 'all') return true;
    return r.status === activeTab;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Tutor Registration Requests"
        subtitle="Review and manage tutor registration requests from universities."
      />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar searchPlaceholder="Search tutor name, email, or university...">
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All Universities</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All Subjects</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Sort by: Newest</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Tutor</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">University</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Subject(s)</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Qualifications</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Requested On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{r.tutor}</td>
                <td className="px-4 py-3 text-textSecondary">{r.university}</td>
                <td className="px-4 py-3 text-textSecondary">{r.subjects}</td>
                <td className="px-4 py-3 text-textSecondary">{r.qualifications}</td>
                <td className="px-4 py-3 text-textSecondary">{r.requestedOn}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-accentBlue hover:opacity-80">
                      <Eye className="w-4 h-4" />
                    </button>
                    {activeTab === 'pending' && (
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
          <span className="text-[11px] text-textSecondary">Showing 1 to {filtered.length} of {filtered.length} requests</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">&lt;</button>
            <button className="px-2 py-1 text-[11px] bg-textPrimary text-white rounded">1</button>
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">2</button>
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">3</button>
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-textPrimary">32</div>
          <div className="text-[12px] text-textSecondary mt-1">Pending Requests</div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-textPrimary">128</div>
          <div className="text-[12px] text-textSecondary mt-1">Approved (This Month)</div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-textPrimary">18</div>
          <div className="text-[12px] text-textSecondary mt-1">Rejected (This Month)</div>
        </div>
        <div className="bg-white border border-cardBorder rounded-lg p-4 text-center">
          <div className="text-[24px] font-bold text-accentGreen">92.1%</div>
          <div className="text-[12px] text-textSecondary mt-1">Approval Rate</div>
        </div>
      </div>
    </div>
  );
}
