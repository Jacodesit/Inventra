import { useState } from "react"
import Sidebar from "../sidebar/sidebar"
import HeaderLayout from "./header-layout";

type PageProps = {
    children: React.ReactNode
}
export default function Layout({children}:PageProps) {
    const [openSidebar, setOpenSidebar] = useState(() => {
        const saved = localStorage.getItem("sidebar");
        return saved === "true";
    });

    const handleToggle = () => {
        setOpenSidebar(prev => {
            localStorage.setItem("sidebar", (!prev).toString());
            return !prev;
        });
    };

    return (
        <div className="flex">
            <Sidebar
                openSidebar={openSidebar}
                setOpenSidebar={handleToggle}
            />
            <main className="flex-1">
                <HeaderLayout />
                <div className="max-h-[calc(100vh-24px)] p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}
