import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { sessions } from '@/data/mockData';

const tabs = [
  { label: 'All Sessions', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Ongoing', value: 'ongoing' },
  { label: 'Cancelled', value: 'cancelled' },
];

export default function SessionsManagementPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = sessions.filter((s) => {
    if (activeTab === 'all') return true;
    return s.status === activeTab;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Sessions Management"
        subtitle="Monitor and manage all tutoring sessions on the platform."
      />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar searchPlaceholder="Search session, tutor, or student...">
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Status: All</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Date: All</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Session ID</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Tutor</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Student</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Subject</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Date & Time</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Duration</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Amount</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{s.id}</td>
                <td className="px-4 py-3 text-textSecondary">{s.tutor}</td>
                <td className="px-4 py-3 text-textSecondary">{s.student}</td>
                <td className="px-4 py-3 text-textSecondary">{s.subject}</td>
                <td className="px-4 py-3 text-textSecondary">{s.dateTime}</td>
                <td className="px-4 py-3 text-textSecondary">{s.duration}</td>
                <td className="px-4 py-3"><StatusBadge status={s.status} /></td>
                <td className="px-4 py-3 text-textPrimary font-medium">P{s.amount.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-textTertiary hover:text-textPrimary">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-textTertiary hover:text-textPrimary">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-textTertiary hover:text-accentRed">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
