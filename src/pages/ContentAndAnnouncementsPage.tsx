import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import FilterBar from '@/components/FilterBar';
import StatusBadge from '@/components/StatusBadge';
import { Pencil, Trash2, Eye, Plus } from 'lucide-react';
import { announcements } from '@/data/mockData';

const tabs = [
  { label: 'Announcements', value: 'announcements' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Guidelines', value: 'guidelines' },
];

export default function ContentAndAnnouncementsPage() {
  const [activeTab, setActiveTab] = useState('announcements');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(announcements[0]);

  const filtered = activeTab === 'announcements' ? announcements : [];

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Content & Announcements"
        subtitle="Manage platform announcements and help center content."
      >
        <button className="flex items-center gap-1.5 px-3 py-2 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors">
          <Plus className="w-4 h-4" />
          New Announcement
        </button>
      </PageHeader>

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'announcements' && (
        <>
          <FilterBar searchPlaceholder="Search announcements..." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Announcements Table */}
            <div className="bg-white border border-cardBorder rounded-lg shadow-xs overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="bg-tableHeaderBg border-b border-divider">
                    <th className="text-left px-4 py-3 font-semibold text-textSecondary">Title</th>
                    <th className="text-left px-4 py-3 font-semibold text-textSecondary">Target Audience</th>
                    <th className="text-left px-4 py-3 font-semibold text-textSecondary">Published On</th>
                    <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
                    <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((a) => (
                    <tr
                      key={a.id}
                      className={`border-b border-divider hover:bg-tableRowHover transition-colors cursor-pointer ${selectedAnnouncement.id === a.id ? 'bg-gray-50' : ''}`}
                      onClick={() => setSelectedAnnouncement(a)}
                    >
                      <td className="px-4 py-3 font-medium text-textPrimary">{a.title}</td>
                      <td className="px-4 py-3 text-textSecondary">{a.targetAudience}</td>
                      <td className="px-4 py-3 text-textSecondary">{a.publishedOn}</td>
                      <td className="px-4 py-3"><StatusBadge status={a.status} /></td>
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

            {/* Announcement Preview */}
            <div className="bg-white border border-cardBorder rounded-lg p-4 shadow-xs">
              <h3 className="text-[14px] font-semibold text-textPrimary mb-3">Announcement Preview</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] text-textSecondary">Title</span>
                  <p className="text-[13px] font-medium text-textPrimary mt-0.5">{selectedAnnouncement.title}</p>
                </div>
                <div>
                  <span className="text-[11px] text-textSecondary">Content</span>
                  <p className="text-[13px] text-textPrimary mt-0.5 leading-relaxed">{selectedAnnouncement.content}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[11px] text-textSecondary">Target Audience</span>
                    <p className="text-[13px] text-textPrimary mt-0.5">{selectedAnnouncement.targetAudience}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-textSecondary">Status</span>
                    <div className="mt-0.5"><StatusBadge status={selectedAnnouncement.status} /></div>
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-textSecondary">Published On</span>
                  <p className="text-[13px] text-textPrimary mt-0.5">{selectedAnnouncement.publishedOn} 10:00 AM</p>
                </div>
                <button className="w-full py-2 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors">
                  Edit Announcement
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab !== 'announcements' && (
        <div className="bg-white border border-cardBorder rounded-lg p-8 shadow-xs text-center">
          <p className="text-textSecondary text-[13px]">No {activeTab} available.</p>
        </div>
      )}
    </div>
  );
}
