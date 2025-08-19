interface MetricCardProps {
  title?: any
  value?: any
  change?: any
  trend?: any
}

export default function MetricCard({ title, value, change, trend }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* MetricCard component content */}
    </div>
  )
}