interface SidebarProps {
  collapsed?: any
  items?: any
}

export default function Sidebar({ collapsed, items }: SidebarProps) {
  return (
    <div className="bg-gray-900 text-white h-screen fixed left-0 top-0 w-64 transform transition-transform">
      {/* Sidebar component content */}
    </div>
  )
}