import { useState } from "react";
import Layout from "@/components/layout/main-layout";
import SalesModal from "@/components/modal/add-sales-modal";
import type { Auth, Product } from "@/types/inventory";

type pageProps = {
    products: Product[]
} & Auth

export default function Sales({auth, products}:pageProps) {
    const [openSalesModal, setOpenSalesModal] = useState(false);

    return (
        <Layout>
            <div className="">
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-xs text-gray-500'>Business</p>
                        <h1 className='font-semibold text-xl'>{auth.user?.business_title}</h1>
                    </div>
                    <button
                        onClick={() => setOpenSalesModal(true)}
                        className='text-sm border py-3 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-sidebar-color hover:text-white'
                    >
                        Add Sales
                    </button>
                </div>
            </div>
            <SalesModal
                products={products}
                openSalesModal={openSalesModal}
                onClose={() => setOpenSalesModal(false)}
            />
        </Layout>
    )
}
