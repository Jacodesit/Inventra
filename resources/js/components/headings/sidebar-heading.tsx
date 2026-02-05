import { usePage } from "@inertiajs/react"

type pageProps = {
    appName: string;
}

export default function SidebarHeading() {
    const { appName } = usePage<pageProps>().props
    return (
        <header className="font-semibold text-2xl px-8 py-6">
            {appName}
        </header>
    )
}
