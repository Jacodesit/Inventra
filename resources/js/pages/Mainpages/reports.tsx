import ReportHeading from '@/components/headings/report-heading';
import ToggleIcon from '@/components/icon/toggle-sidebar-btn';
import Layout from '@/components/layout/main-layout';

export default function Home() {

    return (
        <Layout>
            <div className="flex items-center gap-2 px-8 py-6">
                <ToggleIcon />
                <ReportHeading />
            </div>
        </Layout>

    )
}
