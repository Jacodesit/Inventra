import type { Product } from "@/types/inventory";

import EditProductDetails from "../card/edit-product-details";
import EditProductHeading from "../headings/edit-product-heading";

type pageProps = {
    onClose: () => void;
    product: Product
    openEditPanel: boolean;
}

export default function EditProductModal({onClose, product, openEditPanel}:pageProps) {
    if(!openEditPanel) return null

    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex justify-end z-500 ">
            <div className="bg-slate-100 rounded max-w-lg w-screen flex flex-col relative px-8 py-5 transition-all duration-300">
                <EditProductHeading onClose={onClose} />
                <div className="flex flex-col justify-between h-full">
                    <EditProductDetails product={product} />
                </div>
            </div>
        </main>
    )
}
