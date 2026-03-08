import { SquarePen } from "lucide-react"
import { useState } from "react"

import type { Product } from "@/types/inventory"
import type { Category } from "@/types/inventory";
import EditProductModal from "../modal/edit-product"

type pageProps = {
    product: Product
    categories: Category[]
}

export default function EditProduct({product, categories}:pageProps) {
    const [openEditPanel, setOpenEditPanel] = useState(false);

    return (
        <div className="flex items-center">
            <button
                onClick={() => setOpenEditPanel(true)}
                title="Edit Product"
                className="cursor-pointer transition-all duration-300 hover:text-green-500 "
            >
                <SquarePen strokeWidth={1.5} size={20} />
            </button>
            <EditProductModal
                categories={categories}
                product={product}
                openEditPanel={openEditPanel}
                onClose={() => setOpenEditPanel(false)}
            />
        </div>

    )
}
