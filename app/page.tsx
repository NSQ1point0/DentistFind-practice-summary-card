import { PracticeSummaryCard } from '@/components/PracticeSummaryCard';
import { mockPractices } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Practice Summary Cards
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mockPractices.map((practice) => (
            <PracticeSummaryCard key={practice.id} practice={practice} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500">
            Created by Aamir dammad
          </p>
        </div>
      </div>
    </main>
  );
}
