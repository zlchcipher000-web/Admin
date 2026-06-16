interface StatusBadgeProps {
  status: string;
}

const statusMap: Record<string, string> = {
  verified: 'status-badge--verified',
  active: 'status-badge--active',
  pending: 'status-badge--pending',
  rejected: 'status-badge--rejected',
  suspended: 'status-badge--suspended',
  draft: 'status-badge--draft',
  completed: 'status-badge--completed',
  ongoing: 'status-badge--ongoing',
  open: 'status-badge--open',
  resolved: 'status-badge--resolved',
  closed: 'status-badge--closed',
  high: 'status-badge--high',
  medium: 'status-badge--medium',
  low: 'status-badge--low',
  approved: 'status-badge--approved',
  inactive: 'status-badge--inactive',
  unverified: 'status-badge--unverified',
  cancelled: 'status-badge--cancelled',
  'in-progress': 'status-badge--ongoing',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const className = statusMap[status.toLowerCase()] || 'bg-gray-100 text-gray-600';
  return (
    <span className={`status-badge ${className}`}>
      {status}
    </span>
  );
}
