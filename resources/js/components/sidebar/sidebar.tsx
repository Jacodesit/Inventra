import SidebarHeading from "../headings/sidebar-heading"
import SidebarLinks from "../links/sidebar-links"

type pageProps = {
    openSidebar: boolean
    setOpenSidebar: (open: boolean) => void
}

export default function Sidebar({openSidebar, setOpenSidebar}:pageProps) {
    return (
        <aside className={`bg-sidebar-color h-screen text-white duration-300 transition-all
            ${openSidebar ? 'w-20' : 'w-72'}
        `}>
            <div className="flex flex-col gap-5">
                <SidebarHeading openSidebar={openSidebar} onToggle={() => setOpenSidebar(!openSidebar)}/>
                <SidebarLinks openSidebar={openSidebar}/>
            </div>
        </aside>
    )
}

