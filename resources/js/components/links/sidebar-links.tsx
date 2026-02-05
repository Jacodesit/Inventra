import { Link } from "@inertiajs/react"

import { LayoutDashboard } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import { ChartBarStacked } from 'lucide-react';
import { Layers } from 'lucide-react';
import { FileText } from 'lucide-react';


export default function SidebarLinks() {
    const links = [
        { name: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '/dashboard' },
        { name: 'Products', icon: <PackageSearch size={18} />, href: '/products' },
        { name: 'Categories', icon: <Layers size={18} />, href: '/categories' },
        { name: 'Stock', icon: <ChartBarStacked size={18} />, href: '/stock' },
        { name: 'Reports', icon: <FileText size={18} />, href: '/reports' },
    ]

    return (
        <nav className="flex flex-col">
            {links.map(link => (
                <Link key={link.name} href={link.href}>
                    <div className="flex items-center px-8 py-4 gap-1 transition-all duration-400 hover:bg-gray-800">
                        {link.icon}
                        {link.name}
                    </div>
                </Link>
            ))}
        </nav>
    )
}
