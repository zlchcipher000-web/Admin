import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import TabBar from '@/components/TabBar';
import { useAppContext } from '@/context/AppContext';

const settingTabs = [
  { label: 'General Settings', value: 'general' },
  { label: 'Registration Settings', value: 'registration' },
  { label: 'Payment Settings', value: 'payment' },
  { label: 'Notification Settings', value: 'notification' },
  { label: 'Security Settings', value: 'security' },
  { label: 'Target Audience', value: 'audience' },
  { label: 'Maintenance', value: 'maintenance' },
];

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange?: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-9 h-5 rounded-full transition-colors duration-150 ${checked ? 'bg-accentGreen' : 'bg-gray-300'}`}
    >
      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-150 ${checked ? 'translate-x-4.5 left-0.5' : 'left-0.5'}`} style={{ transform: checked ? 'translateX(16px)' : 'translateX(0)' }} />
    </button>
  );
}

export default function SystemSettingsPage() {
  const { state } = useAppContext();
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState(state.settings);

  const updateField = (field: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="System Settings"
        subtitle="Configure platform settings and preferences."
      />

      <TabBar tabs={settingTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'general' && (
        <div className="bg-white border border-cardBorder rounded-lg shadow-xs p-4 max-w-2xl">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-4">General Settings</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Platform Name</label>
              <input
                type="text"
                value={settings.platformName}
                onChange={(e) => updateField('platformName', e.target.value)}
                className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Platform Email</label>
              <input
                type="text"
                value={settings.platformEmail}
                onChange={(e) => updateField('platformEmail', e.target.value)}
                className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Platform Timezone</label>
              <select
                value={settings.timezone}
                onChange={(e) => updateField('timezone', e.target.value)}
                className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary bg-white focus:outline-none focus:border-textPrimary transition-colors"
              >
                <option>GMT+08:00 Asia/Manila</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Date Format</label>
              <select
                value={settings.dateFormat}
                onChange={(e) => updateField('dateFormat', e.target.value)}
                className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary bg-white focus:outline-none focus:border-textPrimary transition-colors"
              >
                <option>June 2, 2026 (Month D, YYYY)</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Platform Language</label>
              <select
                value={settings.language}
                onChange={(e) => updateField('language', e.target.value)}
                className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary bg-white focus:outline-none focus:border-textPrimary transition-colors"
              >
                <option>English</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Default Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => updateField('currency', e.target.value)}
                className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary bg-white focus:outline-none focus:border-textPrimary transition-colors"
              >
                <option>PHP - Philippine Peso (P)</option>
              </select>
            </div>
            <button className="w-full py-2.5 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors font-medium">
              Save Changes
            </button>
          </div>
        </div>
      )}

      {activeTab === 'registration' && (
        <div className="bg-white border border-cardBorder rounded-lg shadow-xs p-4 max-w-2xl">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-4">Registration Settings</h3>
          <div className="space-y-4">
            {[
              { label: 'Enable Registration', field: 'enableRegistration', desc: 'Allow new users to register on the platform' },
              { label: 'Email Verification Required', field: 'emailVerification', desc: 'Require email verification before account activation' },
              { label: 'Allow Tutor Registration', field: 'allowTutorRegistration', desc: 'Allow tutors to register independently' },
            ].map((item) => (
              <div key={item.field} className="flex items-center justify-between py-2">
                <div>
                  <div className="text-[13px] font-medium text-textPrimary">{item.label}</div>
                  <div className="text-[11px] text-textSecondary">{item.desc}</div>
                </div>
                <ToggleSwitch
                  checked={settings[item.field as keyof typeof settings] as boolean}
                  onChange={() => updateField(item.field, !(settings[item.field as keyof typeof settings] as boolean))}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'payment' && (
        <div className="bg-white border border-cardBorder rounded-lg shadow-xs p-4 max-w-2xl">
          <h3 className="text-[14px] font-semibold text-textPrimary mb-4">Payment Settings</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Platform Commission Rate</label>
              <div className="relative">
                <input
                  type="number"
                  value={settings.commissionRate}
                  onChange={(e) => updateField('commissionRate', e.target.value)}
                  className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors w-full"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-textSecondary">%</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-center gap-2">
              <label className="text-[12px] text-textSecondary">Minimum Payout Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[12px] text-textSecondary">P</span>
                <input
                  type="number"
                  value={settings.minPayoutAmount}
                  onChange={(e) => updateField('minPayoutAmount', e.target.value)}
                  className="text-[13px] border border-inputBorder rounded-md pl-7 pr-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors w-full"
                />
              </div>
            </div>
            <div>
              <label className="text-[12px] text-textSecondary block mb-2">Supported Payment Methods</label>
              <div className="space-y-2">
                {['GCash', 'Bank Transfer', 'PayPal'].map((method) => (
                  <label key={method} className="flex items-center gap-2 text-[13px] text-textPrimary cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    {method}
                  </label>
                ))}
              </div>
            </div>
            <button className="w-full py-2.5 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors font-medium">
              Save Changes
            </button>
          </div>
        </div>
      )}

      {['notification', 'security', 'audience', 'maintenance'].includes(activeTab) && (
        <div className="bg-white border border-cardBorder rounded-lg p-8 shadow-xs text-center">
          <p className="text-textSecondary text-[13px]">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} settings coming soon.</p>
        </div>
      )}
    </div>
  );
}
