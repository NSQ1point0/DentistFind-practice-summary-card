import type { PracticeSummary } from './types';

/**
 * Mock data representing different practice performance scenarios
 * Used for demonstration and testing
 */
export const mockPractices: PracticeSummary[] = [
  {
    id: 'practice-001',
    name: 'Bright Smile Dental',
    city: 'San Francisco',
    country: 'USA',
    newPatientsThisMonth: 24,
    appointmentRequests: 18,
    conversionRate: 28,
    monthlyTrend: [22, 25, 26, 27, 28, 28],
    marketingSpend: 1200,
    recommendations: [
      'Consider increasing marketing budget by 15% given strong conversion trend',
      'Schedule follow-up calls within 2 hours of appointment requests to maintain momentum',
    ],
  },
  {
    id: 'practice-002',
    name: 'Dental Excellence Partners',
    city: 'New York',
    country: 'USA',
    newPatientsThisMonth: 16,
    appointmentRequests: 34,
    conversionRate: 15,
    monthlyTrend: [14, 15, 16, 15, 15, 15],
    marketingSpend: 1500,
    recommendations: [
      'Response time to appointment requests may need improvement',
      'A/B test different appointment confirmation methods to increase conversion',
    ],
  },
  {
    id: 'practice-003',
    name: 'Coastal Dental Care',
    city: 'Los Angeles',
    country: 'USA',
    newPatientsThisMonth: 8,
    appointmentRequests: 22,
    conversionRate: 8,
    monthlyTrend: [10, 9, 8, 7, 8, 8],
    marketingSpend: 800,
    showRate: 72,
    recommendations: [
      'Conversion declining—review appointment confirmation process',
      'Increase engagement with recent leads through personalized outreach',
    ],
  },
];
