import type { Product } from "@/types/inventory"

type pageProps = {
    product: Product
}

export default function ProductDetailsCard({product}:pageProps) {
    return (
        <div>
            <div className="flex px-4 py-8 gap-3">
                <div className="gap-1 ">
                    {product.product_image === null ? (
                        <img src="/Empty State/product.svg" alt="Image" className="rounded h-15" />
                    ) : (
                        <img src={product.product_image} alt="Product Image" className="rounded h-40" />
                    )}
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-medium text-xl">{product.product_name}</h1>
                        <p className="text-xs text-gray-500">{product.product_description}</p>
                    </div>
                </div>
            </div>
            <div className="px-4 flex flex-col gap-2">
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Product ID</p>
                    <p className="font-medium">{product.product_code}</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Category</p>
                    <p className="font-medium">{product.category?.name}</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Quantity</p>
                    <p className="font-medium">{product.product_quantity} pcs</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Price</p>
                    <p className="font-medium">{product.product_price}</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Status</p>
                    <p className={
                        product.product_status === 'in_stock' ? 'text-green-500 capitalize font-medium' :
                        product.product_status === 'low_stock' ? 'text-amber-500 font-medium' : 'text-red-500 font-medium'
                    }>
                        {product.product_status.replace(/_/g, ' ').replace(/\b\w/g, c => c)}
                    </p>
                </div>
            </div>
        </div>
    )
}
