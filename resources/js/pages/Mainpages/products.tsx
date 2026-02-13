import { useState } from 'react';

import AddProduct from '@/components/buttons/add-product';
import ProductsList from '@/components/data/product-data';
import Layout from '@/components/layout/main-layout';
import AddProductModal from '@/components/modal/add-product-modal';

import type { Product } from '@/types/inventory';
import type { Category } from '@/types/inventory';
import type { Auth } from '@/types/inventory';

type PageProps = {
    products: Product[]
    categories: Category[]
} & Auth

export default function Home({products, categories, auth}:PageProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Layout>
            <div className="">
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-xs text-gray-500'>Business</p>
                        <h1 className='font-semibold text-xl'>{auth.user?.business_title}</h1>
                    </div>
                    <AddProduct
                        onClick={() => setOpenModal(true)}
                    />
                </div>

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
                    <ProductsList
                        products={products}
                        categories={categories}
                    />
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
