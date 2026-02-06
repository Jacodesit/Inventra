import { useState } from "react"
import Sidebar from "../sidebar/sidebar"

type PageProps = {
    children: React.ReactNode
}
export default function Layout({children}:PageProps) {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="flex">
            <Sidebar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
            />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}
