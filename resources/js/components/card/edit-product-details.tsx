import type { Product } from "@/types/inventory"
import type { Category } from "@/types/inventory"

import EditProductForm from "../form/edit-product"

type pageProps = {
    product: Product
    onClose: () => void
    categories: Category[]
}

export default function EditProductDetails({product, onClose, categories}:pageProps) {
    return (
        <div>
            <EditProductForm product={product} onClose={onClose} categories={categories} />
        </div>
    )
}
