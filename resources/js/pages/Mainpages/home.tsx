import { router } from '@inertiajs/react'
import Layout from '@/components/layout/main-layout';

import { logout } from '@/routes';

export default function Home() {

    const handleLogout = () => {
        router.visit(logout());
    }

    return (
        <Layout>
            <div className="flex justify-between">
                this is the home page
                <button
                    onClick={handleLogout}
                    className="border px-5 py-3"
                >
                    Logout
                </button>
            </div>
        </Layout>

    )
}
