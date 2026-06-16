import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Pencil, Eye, Plus } from 'lucide-react';
import { users } from '@/data/mockData';

const tabs = [
  { label: 'All Users', value: 'all' },
  { label: 'Tutors', value: 'tutor' },
  { label: 'Students', value: 'student' },
  { label: 'Parents', value: 'parent' },
];

export default function UsersManagementPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = users.filter((u) => {
    if (activeTab !== 'all' && u.role !== activeTab) return false;
    if (search && !u.name.toLowerCase().includes(search.toLowerCase()) && !u.email.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Users Management"
        subtitle="Manage platform users, verify accounts, and control user access."
      >
        <button className="flex items-center gap-1.5 px-3 py-2 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors">
          <Plus className="w-4 h-4" />
          Add New User
        </button>
      </PageHeader>

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar
        searchPlaceholder="Search by name, email, or ID..."
        onSearch={setSearch}
      >
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Role: All</option>
          <option>Tutor</option>
          <option>Student</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Status: All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>Verification: All</option>
          <option>Verified</option>
          <option>Unverified</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">User</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">User ID</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Role</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Email</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Verification</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Joined On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-accentPurple/10 flex items-center justify-center text-accentPurple text-[11px] font-bold flex-shrink-0">
                      {u.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <span className="font-medium text-textPrimary">{u.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-textSecondary">{u.id.toUpperCase()}</td>
                <td className="px-4 py-3 text-textSecondary capitalize">{u.role}</td>
                <td className="px-4 py-3 text-textSecondary">{u.email}</td>
                <td className="px-4 py-3"><StatusBadge status={u.status} /></td>
                <td className="px-4 py-3"><StatusBadge status={u.verification} /></td>
                <td className="px-4 py-3 text-textSecondary">{u.joinedOn}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-textTertiary hover:text-textPrimary transition-colors">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-textTertiary hover:text-textPrimary transition-colors">
                      <Eye className="w-4 h-4" />
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
