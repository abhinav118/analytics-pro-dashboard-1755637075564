interface DataTableProps {
  columns?: any
  data?: any
  pagination?: any
  searchable?: any
}

export default function DataTable({ columns, data, pagination, searchable }: DataTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* DataTable component content */}
    </div>
  )
}