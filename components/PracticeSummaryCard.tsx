import { PracticeTrendChart } from './PracticeTrendChart';
import { getPerformanceStatus, type PracticeSummary } from '@/lib/types';

interface PracticeSummaryCardProps {
  practice: PracticeSummary;
}

export function PracticeSummaryCard({ practice }: PracticeSummaryCardProps) {
  const status = getPerformanceStatus(practice.conversionRate);
  
  const statusConfig = {
    high: { label: 'High Performer', color: '#27ae60' },
    stable: { label: 'Stable', color: '#F4C430' },
    'at-risk': { label: 'At Risk', color: '#E63946' },
  };

  const config = statusConfig[status];

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-gray-100">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
              {practice.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 truncate">
              {practice.city}, {practice.country}
            </p>
          </div>
          <div className="flex-shrink-0 px-2 py-1 rounded text-xs font-medium whitespace-nowrap" style={{ backgroundColor: `${config.color}20`, color: config.color }}>
            {config.label}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <MetricBox
            label="New Patients"
            value={practice.newPatientsThisMonth}
            unit="this month"
          />
          <MetricBox
            label="Requests"
            value={practice.appointmentRequests}
            unit="pending"
          />
          <MetricBox
            label="Conversion"
            value={practice.conversionRate}
            unit="%"
            highlight
          />
          {practice.marketingSpend && (
            <MetricBox
              label="Marketing"
              value={`$${practice.marketingSpend}`}
              unit="spent"
            />
          )}
        </div>

        {/* Trend Visualization */}
        <div className="pt-2">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Conversion Trend
          </p>
          <PracticeTrendChart data={practice.monthlyTrend} />
        </div>
      </div>
    </div>
  );
}

interface MetricBoxProps {
  label: string;
  value: string | number;
  unit: string;
  highlight?: boolean;
}

function MetricBox({ label, value, unit, highlight }: MetricBoxProps) {
  return (
    <div
      className={`p-3 rounded-md border overflow-hidden ${
        highlight
          ? 'bg-teal-50 border-teal-200'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-wide mb-1 truncate ${
        highlight ? 'text-teal-700' : 'text-gray-600'
      }`}>
        {label}
      </p>
      <p className={`text-lg font-bold truncate ${
        highlight ? 'text-teal-900' : 'text-gray-900'
      }`}>
        {value}
      </p>
      <p className={`text-xs truncate ${
        highlight ? 'text-teal-600' : 'text-gray-500'
      }`}>
        {unit}
      </p>
    </div>
  );
}
