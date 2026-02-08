import type { Product } from "@/types/inventory"

type pageProps = {
    products: Product[]
}

export default function ProductsList({products}:pageProps) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map(product => (
                <div
                    key={product.id}
                    className="border"
                >
                    <p>{product.product_name}</p>
                    <p>{product.product_price}</p>
                    <p>{product.product_quantity}</p>
                    <p>{product.product_status}</p>
                    <p>{product.product_description}</p>
                    <p>{product.product_code}</p>
                </div>
            ))}
        </div>
    )
}
