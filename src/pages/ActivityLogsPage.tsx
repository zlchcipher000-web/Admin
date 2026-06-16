import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import FilterBar from '@/components/FilterBar';
import { activityLogs } from '@/data/mockData';

export default function ActivityLogsPage() {
  const [search, setSearch] = useState('');

  const filtered = activityLogs.filter((l) => {
    if (search && !l.admin.toLowerCase().includes(search.toLowerCase()) && !l.action.toLowerCase().includes(search.toLowerCase()) && !l.module.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Activity Logs"
        subtitle="Monitor system activities and admin actions."
      />

      <FilterBar
        searchPlaceholder="Search by admin, action, or module..."
        onSearch={setSearch}
      >
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Date Range</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Admin: All</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Action: All</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Module: All</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Date & Time</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Admin</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Action</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Module</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Details</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">IP Address</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 text-textSecondary whitespace-nowrap">{l.dateTime}</td>
                <td className="px-4 py-3 font-medium text-textPrimary">{l.admin}</td>
                <td className="px-4 py-3 text-textSecondary">{l.action}</td>
                <td className="px-4 py-3 text-textSecondary">{l.module}</td>
                <td className="px-4 py-3 text-textSecondary">{l.details}</td>
                <td className="px-4 py-3 text-textSecondary font-mono">{l.ipAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-divider">
          <span className="text-[11px] text-textSecondary">Showing 1 to {filtered.length} of {filtered.length} logs</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">&lt;</button>
            <button className="px-2 py-1 text-[11px] bg-textPrimary text-white rounded">1</button>
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">2</button>
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">3</button>
            <button className="px-2 py-1 text-[11px] border border-inputBorder rounded hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
