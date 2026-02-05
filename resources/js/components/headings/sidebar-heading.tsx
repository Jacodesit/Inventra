import { usePage } from "@inertiajs/react"
import AppIcon from "../icon/app-icon";

type pageProps = {
    appName: string;
}

export default function SidebarHeading() {
    const { appName } = usePage<pageProps>().props
    return (
        <header className="font-semibold text-2xl px-8 py-6 flex items-center gap-1">
            <AppIcon />
            {appName}
        </header>
    )
}
