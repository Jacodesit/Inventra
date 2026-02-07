import { useState } from 'react';

import AddProduct from '@/components/buttons/add-product';
import Layout from '@/components/layout/main-layout';
import AddProductModal from '@/components/modal/add-product-modal';

import type { Product } from '@/types/inventory';
import type { Category } from '@/types/inventory';

type PageProps = {
    products: Product[]
    categories: Category[]
}

export default function Home({products, categories}:PageProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Layout>
            <div className="">
                <AddProduct
                    onClick={() => setOpenModal(true)}
                />

                {/* Handle empty and with states */}
                {products.length === 0 ? (
                    <div className='flex items-center justify-center h-[70vh] flex-col gap-5'>
                        <div className=''>
                            <img
                                src='/SVG/noproduct.svg'
                                alt='No product'
                                className='h-50 opacity-50'
                            />
                        </div>
                        <p className='text-gray-500'>No products found!</p>
                    </div>
                ) : (
                    <div>
                        products found!
                    </div>
                )}
            </div>
            <AddProductModal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                categories={categories}
            />
        </Layout>
    )
}
