import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Eye } from 'lucide-react';
import { payoutRequests } from '@/data/mockData';

const tabs = [
  { label: 'Pending', value: 'pending' },
  { label: 'Approved', value: 'approved' },
  { label: 'Completed', value: 'completed' },
  { label: 'All', value: 'all' },
];

export default function PayoutRequestsPage() {
  const [activeTab, setActiveTab] = useState('pending');

  const filtered = payoutRequests.filter((p) => {
    if (activeTab === 'all') return true;
    return p.status === activeTab;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Payout Requests"
        subtitle="Review and manage tutor payout requests."
      />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar searchPlaceholder="Search tutor or request ID...">
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Status: All</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Request ID</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Tutor</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Amount</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Payout Method</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Requested On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{p.id}</td>
                <td className="px-4 py-3 text-textSecondary">{p.tutor}</td>
                <td className="px-4 py-3 text-textPrimary font-medium">P{p.amount.toLocaleString()}</td>
                <td className="px-4 py-3 text-textSecondary">{p.method}</td>
                <td className="px-4 py-3 text-textSecondary">{p.requestedOn}</td>
                <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
                <td className="px-4 py-3">
                  {p.status === 'pending' && (
                    <button className="px-3 py-1 text-[11px] text-white bg-accentBlue rounded hover:bg-accentBlue/90 transition-colors">
                      Review
                    </button>
                  )}
                  {p.status !== 'pending' && (
                    <button className="flex items-center gap-1 px-2 py-1 text-[11px] text-textSecondary border border-inputBorder rounded hover:bg-gray-50 transition-colors">
                      <Eye className="w-3 h-3" /> View
                    </button>
                  )}
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
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
