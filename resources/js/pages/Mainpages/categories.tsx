import { useState } from 'react';

import AddCategory from '@/components/buttons/add-categories';
import CategoriesList from '@/components/data/categories-data';
import Layout from '@/components/layout/main-layout';

import AddCategoriesModal from '@/components/modal/add-categories-modal';

import type { Auth, Category } from '@/types/inventory';

type pageProps = {
    categories: {
        data: Category[];
        links: { url: string | null; label: string; active: boolean }[];
    }
} & Auth

export default function Categories({auth, categories}:pageProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Layout>
            <div className="">
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-xs text-gray-500'>Business</p>
                        <h1 className='font-semibold text-xl'>{auth.user?.business_title}</h1>
                    </div>
                    <AddCategory
                        onClick={() => setOpenModal(true)}
                    />
                </div>
                <CategoriesList categories={categories} />
            </div>
            <AddCategoriesModal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
            />
        </Layout>
    )
}
