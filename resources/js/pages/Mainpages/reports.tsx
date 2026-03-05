import { Link } from '@inertiajs/react';

import { ArrowLeft } from 'lucide-react';

import Layout from '@/components/layout/main-layout';

export default function Home() {

    return (
        <Layout>
            <div className="h-[65vh] flex items-center justify-center">
                <div className='text-center flex flex-col gap-5'>
                    <div className='mx-auto text-center flex flex-col items-center gap-5'>
                        <img src='/Empty State/discontinued.svg' alt='No Reports' className='w-70 mx-auto'/>
                        <p className='text-sm text-gray-500'>This section has been discontinued. The page remains accessible, but no content is available</p>
                    </div>
                    <Link href={'/dashboard'}
                        className='text-xs r py-3 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-sidebar-color hover:text-white w-max mx-auto'
                    >
                        <ArrowLeft size={18} className='inline-block mr-2' />
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </Layout>

    )
}
