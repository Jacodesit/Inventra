import { router } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import StockData from '@/components/data/stock-data';
import Layout from '@/components/layout/main-layout';

import type { Auth, Category, Product } from '@/types/inventory';

type pageProps = {
    products: {
        data: Product[];
        links: { url: string | null; label: string; active: boolean }[];
    };
    categories: Category[]
} & Auth

export default function Home({auth, products, categories}:pageProps) {
    const [editedQuantities, setEditedQuantities] = useState<Record<number, number>>(
        Object.fromEntries(products.data.map(p => [p.id, p.product_quantity]))
    );

    const increment = (id: number) => {
        setEditedQuantities(prev => ({
            ...prev,
            [id]: prev[id] + 1
        }));
    };

    const decrement = (id: number) => {
        setEditedQuantities(prev => ({
            ...prev,
            [id]: Math.max(prev[id] - 1, 0)
        }));
    };

    const handleSave = () => {
        const changed = Object.fromEntries(
            Object.entries(editedQuantities).filter(([id, qty]) => {
                const original = products.data.find(p => p.id === +id)?.product_quantity;
                return original !== qty;
            })
        );

        router.patch("/stock/update-quantities", { quantities: changed }, {
            onSuccess: () => {
                router.reload({
                    only: ['totalProducts','statusCounts','lowStock','noStock']
                });
                toast.success('Stock quantities updated successfully!');
            }
        });
    };

    return (
        <Layout>
            <div className="">
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-xs text-gray-500'>Business</p>
                        <h1 className='font-semibold text-xl'>{auth.user?.business_title}</h1>
                    </div>
                    <button
                        onClick={handleSave}
                        className='text-sm border py-3 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-sidebar-color hover:text-white'
                    >
                        Save
                    </button>
                </div>

                {/* Handle Empty State */}
                {products.data.length === 0 ? (
                    <div className='flex items-center justify-center h-[70vh] flex-col gap-5'>
                        <div className=''>
                            <img
                                src='/SVG/noproduct.svg'
                                alt='No product'
                                className='h-70'
                            />
                        </div>
                        <p className='text-gray-500 text-sm'>No products found!</p>
                    </div>
                ) : (
                    <StockData
                        products={products}
                        categories={categories}
                        quantities={editedQuantities}
                        increment={increment}
                        decrement={decrement}
                    />
                )}
            </div>
        </Layout>

    )
}
