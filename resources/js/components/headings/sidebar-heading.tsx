import { usePage } from "@inertiajs/react"

import OpenLeftPanel from "../buttons/panel-left-open";
import CloseLeftPanel from "../buttons/toggle-sidebar-btn";
import AppIcon from "../icon/app-icon";

type SidebarProps = {
    openSidebar: boolean
    onToggle: () => void
}

type pageProps = {
    appName: string;
}

export default function SidebarHeading({openSidebar, onToggle}:SidebarProps) {
    const { appName } = usePage<pageProps>().props;

    return (
        <header className="font-semibold text-2xl px-8 py-6 flex items-center justify-between">
            <div className={`flex items-center gap-1 transition-all duration-300
                ${openSidebar ? 'hidden px-8 py-6' : 'block'}
            `}>
                <AppIcon />
                {appName}
            </div>
            {!openSidebar ? (
                <CloseLeftPanel onToggle={onToggle} />
            ) : (
                <OpenLeftPanel onToggle={onToggle} />
            )}
        </header>
    )
}

// font-semibold text-2xl px-8 py-6 flex items-center justify-between
