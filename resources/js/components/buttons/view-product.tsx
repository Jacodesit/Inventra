import { Eye } from "lucide-react"

import { useState } from "react"

import type { Product } from "@/types/inventory"

import ProductDetails from "../modal/product_details"

type pageProps = {
    product: Product
}

export default function ViewProduct({product}:pageProps) {
    const [openPanel, setOpenPanel] = useState(false);

    return (
        <div className="flex items-center">
            <button
                onClick={() => setOpenPanel(true)}
                title="View Product"
                className="cursor-pointer transition-all duration-300 hover:text-blue-500 "
            >
                <Eye strokeWidth={1.5} size={20}/>
            </button>
            <ProductDetails
                product={product}
                openPanel={openPanel}
                onClose={() => setOpenPanel(false)}
            />
        </div>
    )
}
