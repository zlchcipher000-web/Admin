import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import { Check, X, Eye } from 'lucide-react';
import { universityRequests } from '@/data/mockData';

const tabs = [
  { label: 'Pending Requests', value: 'pending' },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' },
];

export default function UniversityRequestsPage() {
  const [activeTab, setActiveTab] = useState('pending');

  const filtered = universityRequests.filter((r) => r.status === activeTab);

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="University Requests"
        subtitle="Review and manage university account requests."
        dateRange="May 2, 2026 - June 2, 2026"
      />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar searchPlaceholder="Search university name or email...">
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All Country</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Sort by: Newest</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">University</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Contact Person</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Email</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Country</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Requested On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{r.university}</td>
                <td className="px-4 py-3 text-textSecondary">{r.contactPerson}</td>
                <td className="px-4 py-3 text-textSecondary">{r.email}</td>
                <td className="px-4 py-3 text-textSecondary">{r.country}</td>
                <td className="px-4 py-3 text-textSecondary">{r.requestedOn}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-accentBlue hover:opacity-80 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </button>
                    {activeTab === 'pending' && (
                      <>
                        <button className="flex items-center gap-1 px-2 py-1 text-[11px] text-white bg-accentGreen rounded hover:bg-accentGreen/90 transition-colors">
                          <Check className="w-3 h-3" /> Approve
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 text-[11px] text-white bg-accentRed rounded hover:bg-accentRed/90 transition-colors">
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
      </div>

      {/* Approval Process Flow */}
      <div className="bg-white border border-cardBorder rounded-lg shadow-xs p-6 mt-4">
        <h3 className="text-[14px] font-semibold text-textPrimary mb-4">University Approval Process</h3>
        <div className="flex items-center justify-center gap-4">
          {[
            { step: 1, label: 'Review Request', active: true },
            { step: 2, label: 'Verify Information', active: false },
            { step: 3, label: 'Approve or Reject', active: false },
            { step: 4, label: 'Account Created', active: false },
          ].map((s, i, arr) => (
            <div key={s.step} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold border-2 ${s.active ? 'bg-accentGreen border-accentGreen text-white' : 'border-gray-300 text-textSecondary'}`}>
                  {s.active ? <Check className="w-4 h-4" /> : s.step}
                </div>
                <span className="text-[11px] text-textSecondary mt-1.5 whitespace-nowrap">{s.label}</span>
              </div>
              {i < arr.length - 1 && (
                <div className="w-12 border-t-2 border-dashed border-gray-300 mb-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
