interface TabBarProps {
  tabs: { label: string; value: string; badge?: number }[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex items-center gap-1 border-b border-divider pb-0 mb-4 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`
            relative px-4 py-2 text-[13px] font-medium rounded-t-md whitespace-nowrap
            transition-all duration-200 flex items-center gap-1.5
            ${activeTab === tab.value
              ? 'bg-textPrimary text-white'
              : 'text-textSecondary hover:text-textPrimary hover:bg-gray-100'
            }
          `}
        >
          {tab.label}
          {tab.badge !== undefined && tab.badge > 0 && (
            <span className="bg-accentRed text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
