import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { universities } from '@/data/mockData';

const tabs = [
  { label: 'All Universities', value: 'all' },
  { label: 'Pending Requests', value: 'pending', badge: 1 },
  { label: 'Approved', value: 'approved' },
  { label: 'Suspended', value: 'suspended' },
  { label: 'Rejected', value: 'rejected' },
];

export default function UniversityManagementPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = universities.filter((u) => {
    if (activeTab !== 'all' && u.status !== activeTab) return false;
    if (search && !u.name.toLowerCase().includes(search.toLowerCase()) && !u.email.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="University Management"
        subtitle="Manage all universities on the platform."
      >
        <button className="flex items-center gap-1.5 px-3 py-2 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors">
          <Plus className="w-4 h-4" />
          Add University
        </button>
      </PageHeader>

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar
        searchPlaceholder="Search university name, email, or domain..."
        onSearch={setSearch}
      >
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All Status</option>
        </select>
        <select className="text-[13px] border border-inputBorder rounded-md px-3 py-2 bg-white text-textSecondary">
          <option>All Country</option>
        </select>
      </FilterBar>

      <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">University</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Contact Person</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Email</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Students</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Tutors</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Joined On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr
                key={u.id}
                className="border-b border-divider hover:bg-tableRowHover transition-colors cursor-pointer"
                onClick={() => navigate(`/universities/${u.id}`)}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: u.logoColor }}>
                      {u.initials}
                    </div>
                    <span className="font-medium text-textPrimary">{u.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-textSecondary">{u.contactPerson}</td>
                <td className="px-4 py-3 text-textSecondary">{u.email}</td>
                <td className="px-4 py-3"><StatusBadge status={u.status} /></td>
                <td className="px-4 py-3 text-textPrimary">{u.students.toLocaleString()}</td>
                <td className="px-4 py-3 text-textPrimary">{u.tutors.toLocaleString()}</td>
                <td className="px-4 py-3 text-textSecondary">{u.joinedOn}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-textTertiary hover:text-textPrimary transition-colors" onClick={(e) => e.stopPropagation()}>
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-textTertiary hover:text-accentRed transition-colors" onClick={(e) => e.stopPropagation()}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-divider">
          <span className="text-[11px] text-textSecondary">Showing 1 to {filtered.length} of {filtered.length} universities</span>
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
