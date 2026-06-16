import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { reportTypes, recentReports } from '@/data/mockData';
import StatusBadge from '@/components/StatusBadge';
import { Download, FileText, Play } from 'lucide-react';

const categories = [
  'Overview Reports',
  'User Reports',
  'Session Reports',
  'Financial Reports',
  'Payout Reports',
  'System Reports',
  'Custom Reports',
];

export default function ReportsAndAnalyticsPage() {
  const [activeCategory, setActiveCategory] = useState('Overview Reports');

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Reports & Analytics"
        subtitle="Generate and download platform reports."
        dateRange="May 2, 2026 - June 2, 2026"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Report Categories */}
        <div className="bg-white border border-cardBorder rounded-lg shadow-xs">
          <div className="px-4 py-3 border-b border-divider">
            <h3 className="text-[14px] font-semibold text-textPrimary">Report Categories</h3>
          </div>
          <div className="p-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-3 py-2 text-[13px] rounded-md transition-colors ${
                  activeCategory === cat ? 'bg-gray-100 text-textPrimary font-medium' : 'text-textSecondary hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Reports */}
        <div className="bg-white border border-cardBorder rounded-lg shadow-xs">
          <div className="px-4 py-3 border-b border-divider">
            <h3 className="text-[14px] font-semibold text-textPrimary">Overview Reports</h3>
          </div>
          <div className="p-4 space-y-3">
            {reportTypes.map((r) => (
              <div key={r.id} className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-textTertiary flex-shrink-0" />
                    <span className="text-[13px] font-medium text-textPrimary">{r.name}</span>
                  </div>
                  <p className="text-[11px] text-textSecondary mt-0.5 ml-6">{r.description}</p>
                </div>
                <button className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] text-textSecondary border border-inputBorder rounded-md hover:bg-gray-50 transition-colors flex-shrink-0">
                  <Play className="w-3 h-3" /> Generate
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Report Filters */}
        <div className="bg-white border border-cardBorder rounded-lg shadow-xs">
          <div className="px-4 py-3 border-b border-divider">
            <h3 className="text-[14px] font-semibold text-textPrimary">Report Filters</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="text-[12px] text-textSecondary block mb-1.5">Date Range</label>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" value="May 2, 2026" readOnly className="text-[12px] border border-inputBorder rounded-md px-2.5 py-2 text-textSecondary bg-gray-50" />
                <input type="text" value="June 2, 2026" readOnly className="text-[12px] border border-inputBorder rounded-md px-2.5 py-2 text-textSecondary bg-gray-50" />
              </div>
            </div>
            <div>
              <label className="text-[12px] text-textSecondary block mb-1.5">University</label>
              <select className="w-full text-[12px] border border-inputBorder rounded-md px-2.5 py-2 text-textSecondary bg-white">
                <option>All Universities</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] text-textSecondary block mb-1.5">Report Format</label>
              <select className="w-full text-[12px] border border-inputBorder rounded-md px-2.5 py-2 text-textSecondary bg-white">
                <option>PDF</option>
              </select>
            </div>
            <button className="w-full py-2.5 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors font-medium">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white border border-cardBorder rounded-lg shadow-xs mt-4">
        <div className="flex items-center justify-between px-4 py-3 border-b border-divider">
          <h3 className="text-[14px] font-semibold text-textPrimary">Recent Reports</h3>
          <button className="text-[11px] text-accentBlue hover:underline">View All</button>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-tableHeaderBg border-b border-divider">
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Report Name</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Generated On</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-textSecondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((r, i) => (
              <tr key={i} className="border-b border-divider hover:bg-tableRowHover transition-colors">
                <td className="px-4 py-3 font-medium text-textPrimary">{r.name}</td>
                <td className="px-4 py-3 text-textSecondary">{r.generatedOn}</td>
                <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                <td className="px-4 py-3">
                  <button className="p-1 text-textTertiary hover:text-textPrimary">
                    <Download className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
