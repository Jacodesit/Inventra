import type { Product } from "@/types/inventory"

import PnlEditDelete from "../buttons/panel-edit-delete-btn"
import ProductDetailsCard from "../card/product-details"
import ProductDetailsHeading from "../headings/product-details-heading"

type pageProps = {
    product: Product
    openPanel: boolean
    onClose: () => void
}

export default function ProductDetails({openPanel, onClose, product}:pageProps) {
    if(!openPanel) return null
    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex justify-end z-500 ">
            <div className="bg-slate-100 rounded max-w-lg w-screen flex flex-col relative px-8 py-5 transition-all duration-300  ">
                <ProductDetailsHeading onClose={onClose}/>
                <div className="flex flex-col justify-between h-full">
                    <ProductDetailsCard product={product} />
                    <PnlEditDelete />
                </div>
            </div>
        </main>
    )
}
