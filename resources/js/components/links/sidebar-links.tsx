import { Link } from "@inertiajs/react"

import { Blocks } from '../../../../components/animate-ui/icons/blocks';
import { ChartBar } from '../../../../components/animate-ui/icons/chart-bar';
import { Layers } from '../../../../components/animate-ui/icons/layers';
import { LayoutDashboard } from '../../../../components/animate-ui/icons/layout-dashboard';
import { MessageSquareText } from '../../../../components/animate-ui/icons/message-square-text';

import Logout from "../buttons/logout";

export default function SidebarLinks() {
    const currentUrl = window.location.pathname;

    const links = [
        { name: 'Dashboard', icon: <LayoutDashboard animateOnHover size={18} />, href: '/dashboard' },
        { name: 'Products', icon: <Blocks animateOnHover size={18} />, href: '/products' },
        { name: 'Categories', icon: <Layers animateOnHover size={18} />, href: '/categories' },
        { name: 'Stock', icon: <ChartBar animateOnHover size={18} />, href: '/stock' },
        { name: 'Reports', icon: <MessageSquareText animateOnHover size={18} />, href: '/reports' },
    ]

    return (
        <nav className="flex flex-col justify-between h-[85vh]">
            <div className="flex flex-col w-full">
                {links.map(link => (
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <div className={`flex items-center px-8 py-4 gap-1 transition-all duration-400 hover:bg-gray-800 ${currentUrl === link.href ? 'bg-gray-900 text-white' : ''}`}>
                            {link.icon}
                            {link.name}
                        </div>
                    </Link>
                ))}
            </div>

            <Logout />
        </nav>
    )
}

// flex items-center px-8 py-4 gap-1 transition-all duration-400 hover:bg-gray-800
