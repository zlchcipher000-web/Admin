import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Eye } from 'lucide-react';
import { supportTickets } from '@/data/mockData';

const tabs = [
  { label: 'All Tickets', value: 'all' },
  { label: 'Open', value: 'open' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Resolved', value: 'resolved' },
  { label: 'Closed', value: 'closed' },
];

export default function SupportAndHelpdeskPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = supportTickets.filter((t) => {
    if (activeTab === 'all') return true;
    return t.status === activeTab;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Support & Helpdesk"
        subtitle="Manage support tickets and user inquiries."
      />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar searchPlaceholder="Search ticket ID, subject, or user...">
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Priority: All</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Category: All</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Date: All</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Ticket ID</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Subject</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">User</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Priority</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Category</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Created On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{t.id}</td>
                <td className="px-4 py-3 text-textSecondary">{t.subject}</td>
                <td className="px-4 py-3 text-textSecondary">{t.user}</td>
                <td className="px-4 py-3"><StatusBadge status={t.priority} /></td>
                <td className="px-4 py-3 text-textSecondary">{t.category}</td>
                <td className="px-4 py-3"><StatusBadge status={t.status} /></td>
                <td className="px-4 py-3 text-textSecondary">{t.createdOn}</td>
                <td className="px-4 py-3">
                  <button className="p-1 text-textTertiary hover:text-textPrimary transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-divider">
          <span className="text-[11px] text-textSecondary">Showing 1 to {filtered.length} of {filtered.length} tickets</span>
        </div>
      </div>
    </div>
  );
}
