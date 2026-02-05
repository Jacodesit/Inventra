import Sidebar from "../sidebar/sidebar"

type PageProps = {
    children: React.ReactNode
}
export default function Layout({children}:PageProps) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}
