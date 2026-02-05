import SidebarHeading from "../headings/sidebar-heading"
import SidebarLinks from "../links/sidebar-links"

export default function Sidebar() {
    return (
        <aside className="bg-sidebar-color h-screen w-72 text-white">
            <div className="flex flex-col gap-5">
                <SidebarHeading />
                <SidebarLinks />
            </div>
        </aside>
    )
}
