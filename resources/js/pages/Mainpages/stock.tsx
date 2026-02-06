import StockHeading from '@/components/headings/stock-heading';
import Layout from '@/components/layout/main-layout';

export default function Home() {

    return (
        <Layout>
            <div className="flex items-center gap-2 px-8 py-6">
                <StockHeading />
            </div>
        </Layout>

    )
}
