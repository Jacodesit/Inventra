import ProfileHeader from "../auth/profile-header"

export default function StockHeading() {
    return (
        <header className="flex items-center justify-between w-full border-b px-6 py-4">
            <div>
                <h1 className="font-semibold text-2xl">Stock</h1>
            </div>
            <ProfileHeader />
        </header>
    )
}
