import type { Category } from "@/types/inventory";

import AddProductForm from "../form/add-product-form";
import AddProductHeading from "../headings/add-product-modal-heading";

type pageProps = {
    openModal: boolean
    onClose: () => void;
    categories: Category[]
}

export default function AddProductModal({openModal, onClose, categories}:pageProps) {
    const handleSuccess = () => {
        onClose()
    }

    if(!openModal) return null;
    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5 ">
                <AddProductHeading onClose={onClose} />
                <AddProductForm categories={categories} onClose={handleSuccess} />
            </div>
        </main>
    )
}
