## Project Overview

This project demonstrates a **PracticeSummaryCard** component that displays key performance metrics for individual dental practices.

### Key Features

- **Practice Summary Cards**: Display essential metrics (new patients, appointment requests, conversion rate)
- **Performance Status Indicators**: Visual badges showing practice health (High Performer, Stable, At Risk)
- **6-Month Trend Visualization**: Interactive bar chart showing conversion rate trends
- **Actionable Recommendations**: Practice-specific suggestions based on performance
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Professional Typography & Spacing**: Consistent visual hierarchy and alignment

## Component & Styling Decisions

### Architecture Decisions

1. **Component Structure**
   - `PracticeSummaryCard`: Main card component displaying all practice information
   - `PracticeTrendChart`: Separate chart component using Recharts for clean, reusable visualization
   - `MetricBox`: Internal sub-component for consistent metric display
   - Type definitions in `lib/types.ts` for strong TypeScript support

2. **Styling Approach**
   - **Tailwind CSS v4**: Utility-first approach for maintainability and consistency
   - **Design Tokens**: Semantic color system (neutrals, status colors, surfaces)
   - **Hover States**: Subtle shadow transitions for interactivity feedback
   - **Accessibility**: Proper semantic HTML, ARIA labels, and color contrast ratios

3. **Data Flow**
   - Mock data in `lib/mock-data.ts` provides realistic examples
   - TypeScript model (`PracticeSummary` type) ensures type safety across the app
   - Status calculation function (`getPerformanceStatus`) encapsulates business logic

### Visual Design Rationale

- **Color Palette**: I took green (#27ae60) from DentistFind official with semantic status colors (green/amber/red)
- **Metric Grid**: 2-4 column layout clearly displays KPIs at a glance
- **Trend Chart**: 6-month bar chart provides historical context without overwhelming detail
- **Recommendations Section**: Numbered bullets with visual indicators for scannability
- **Card Elevation**: Subtle shadows and hover effects suggest interactivity without cluttering

## Scaling & Real-World Use

This card component would serve as a core building block in a larger dashboard:

1. **Multi-Practice Dashboard**: Grid of cards for portfolio managers to monitor multiple locations
2. **Detailed Practice View**: Full-page view with expanded metrics, historical data, and drill-down capabilities
3. **Filtration & Sorting**: Filter by status, location, performance tier
4. **Real-Time Data Integration**: Replace mock data with API calls from DentistFind backend
5. **Export Functionality**: Generate PDF reports or CSV data exports

### Enhancements with More Time

- **Interactive Elements**: Click to drill into practice details, expand full analytics
- **Performance Comparisons**: Benchmark against network average, peer practices
- **Historical Data**: Timeline selector to view performance over different periods
- **Advanced Filtering**: Search, sort by metrics, bulk operations
- **Notifications**: Alert system for practices falling below thresholds
- **Dark Mode**: Theme toggle for evening/accessibility preferences
- **Animation**: Smooth transitions when metrics update
- **Error States**: Graceful handling of missing or failed data
- **Loading States**: Skeleton loaders while data fetches
- **API Integration**: Connect to real DentistFind backend

### Code Quality Improvements

- Unit tests for status calculation and data formatting
- Storybook for component documentation and visual testing
- Accessibility audit (WCAG 2.1 compliance)
- Performance optimization (lazy loading for trend charts in large grids)
- Internationalization (i18n) for multi-region support

## How to Run the Project

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/NSQ1point0/DentistFind-practice-summary-card.git
cd dentistfind-practice-dashboard

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Navigate to `http://localhost:3000` to view the dashboard.

### Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```
## Technology Stack

- **React 19** with TypeScript
- **Next.js 16** (App Router)
- **Tailwind CSS v4** for styling
- **shadcn/ui** for base UI components
- **Recharts** for data visualization
- **Geist** font family

## Key Learnings & Design Patterns

1. **Type Safety First**: TypeScript models guide component design and prevent runtime errors
2. **Component Composition**: Smaller, focused components (MetricBox, TrendChart) are easier to maintain
3. **Semantic Styling**: Design tokens and Tailwind utilities make theming consistent
4. **Mobile-First**: Responsive design considers constraints of smaller screens
5. **Accessibility**: Semantic HTML, readable font sizes, sufficient color contrast

