/**
 * Core data model for a dental practice summary
 */
export type PracticeSummary = {
  id: string;
  name: string;
  city: string;
  country: string;
  newPatientsThisMonth: number;
  appointmentRequests: number;
  conversionRate: number;
  monthlyTrend: number[]; // 6-month trend data
  recommendations: string[];
  marketingSpend?: number; // Optional metric
  showRate?: number; // Optional metric
};

/**
 * Status indicator type based on conversion rate
 */
export type PerformanceStatus = 'high' | 'stable' | 'at-risk';

export const getPerformanceStatus = (
  conversionRate: number
): PerformanceStatus => {
  if (conversionRate >= 20) return 'high';
  if (conversionRate >= 10) return 'stable';
  return 'at-risk';
};
