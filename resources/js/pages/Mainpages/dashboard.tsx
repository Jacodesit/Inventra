import DashboardHeading from '@/components/headings/dashboard-heading';
import Layout from '@/components/layout/main-layout';

export default function Home() {

    return (
        <Layout>
            <div className="flex items-center gap-2 px-6 py-6">
                <DashboardHeading />
            </div>
        </Layout>

    )
}
