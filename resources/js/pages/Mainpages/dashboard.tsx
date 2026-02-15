import { usePage } from '@inertiajs/react';

import { Package } from 'lucide-react';
import { PackageCheck } from 'lucide-react';
import { PackageMinus } from 'lucide-react';
import { PackageX } from 'lucide-react';

import LowStock from '@/components/data/low-stock.data';
import NoStock from '@/components/data/no-stock.data';
import Layout from '@/components/layout/main-layout';
import type { Auth, Product } from '@/types/inventory';

type pageProps = {
    totalProducts: number
    statusCounts: Record<string, number>
    lowStock: Product[]
    noStock: Product[]
} & Auth

export default function Home() {
    const {totalProducts, statusCounts, auth, lowStock, noStock} = usePage<pageProps>().props;
    const order = ['in_stock', 'low_stock', 'out_of_stock'];
    const icons = [
        <PackageCheck strokeWidth={1} size={40} className='text-green-500' />,
        <PackageMinus strokeWidth={1} size={40} className='text-amber-500' />,
        <PackageX strokeWidth={1} size={40} className='text-red-500' />
    ]
    return (
        <Layout>
            <div className='flex flex-col mb-5'>
                <p className='text-xs text-gray-500'>Business</p>
                <h1 className='font-semibold text-xl'>{auth.user?.business_title}</h1>
            </div>
            <div className='grid grid-rows lg:grid-cols-4 gap-2 mb-5'>
                <div className='border-l-4 border border-blue-500 p-5 rounded-md flex justify-between bg-blue-50'>
                    <div>
                        <p className='capitalize font-medium mb-2 text-blue-500'>Total Products</p>
                        <p className='text-4xl text-blue-500'>{totalProducts}</p>
                    </div>
                    <div className=''>
                        <Package strokeWidth={1} size={40} className='text-blue-500'/>
                    </div>
                </div>
                {order.map((status, index) => (
                    <div
                        key={status}
                        className={`border-l-4 p-5 rounded-md flex justify-between
                                ${status === 'in_stock' ? 'border border-green-500 text-green-500 bg-green-50' : ''}
                                ${status === 'low_stock' ? 'border border-amber-500 text-amber-500 bg-amber-50' : ''}
                                ${status === 'out_of_stock' ? 'border border-red-500 text-red-500 bg-red-50' : ''}
                            `}
                    >
                        <div>
                            <p className="capitalize font-medium mb-2">{status.replace(/_/g, ' ')}</p>
                            <p className=" text-4xl">{statusCounts[status] ?? 0}</p>
                        </div>

                        <div>
                            {icons[index]}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-5 h-96'>
                <LowStock lowStock={lowStock}/>
                <NoStock noStock={noStock}/>
            </div>
        </Layout>

    )
}
