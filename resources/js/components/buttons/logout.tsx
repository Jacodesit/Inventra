import { router } from "@inertiajs/react"
import { logout } from "@/routes";

import { LogOut } from '../../../../components/animate-ui/icons/log-out';

type pageProps = {
    openSidebar: boolean
}

export default function Logout({openSidebar}:pageProps) {

    const handleLogout = () => {
        router.visit(logout());
    }

    return (
        <div className="">
            <hr className="pt-3 opacity-10" />
            <button
                onClick={handleLogout}
                className="cursor-pointer px-8 py-4 w-full flex items-center justify-start gap-1 transition-all duration-300 hover:bg-gray-800 hover:text-white"
            >
                {!openSidebar ? (
                    <div className="flex items-center gap-1">
                        <LogOut animateOnHover size={18} />
                        <span>Logout</span>
                    </div>
                ) : (
                    <div>
                        <LogOut animateOnHover size={18} />
                    </div>
                )}
            </button>
        </div>

    )
}
