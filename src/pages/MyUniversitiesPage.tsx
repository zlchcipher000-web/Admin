import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Eye, Pencil, Trash2, Plus } from 'lucide-react';
import { universities } from '@/data/mockData';

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Suspended', value: 'suspended' },
];

export default function MyUniversitiesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const filtered = universities.filter((u) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return u.status === 'approved';
    return u.status === activeTab;
  });

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="My Universities"
        subtitle="Universities managed in the platform."
      >
        <button className="flex items-center gap-1.5 px-3 py-2 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors">
          <Plus className="w-4 h-4" />
          Add University
        </button>
      </PageHeader>

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar searchPlaceholder="Search university...">
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
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">University</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Students</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Tutors</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Sessions</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-divider hover:bg-tableRowHover transition-colors cursor-pointer" onClick={() => navigate(`/universities/${u.id}`)}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: u.logoColor }}>
                      {u.initials}
                    </div>
                    <span className="font-medium text-textPrimary">{u.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-textPrimary">{u.students.toLocaleString()}</td>
                <td className="px-4 py-3 text-textPrimary">{u.tutors.toLocaleString()}</td>
                <td className="px-4 py-3 text-textPrimary">{u.sessions.toLocaleString()}</td>
                <td className="px-4 py-3"><StatusBadge status={u.status} /></td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-textTertiary hover:text-textPrimary" onClick={(e) => { e.stopPropagation(); navigate(`/universities/${u.id}`); }}>
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-textTertiary hover:text-textPrimary" onClick={(e) => e.stopPropagation()}>
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-textTertiary hover:text-accentRed" onClick={(e) => e.stopPropagation()}>
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
