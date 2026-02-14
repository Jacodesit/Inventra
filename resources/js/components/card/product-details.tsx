import { PhilippinePeso } from "lucide-react"
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
                        <img src={product.product_image} alt="Product Image" className="rounded h-15" />
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
                    <p className="font-medium text-gray-500">Added At</p>
                    <p className="font-medium">{product.formatted_date}</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Category</p>
                    <p className="font-medium">{product.category?.name}</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Quantity</p>
                    <p className="font-medium">{product.product_quantity} pack(s)</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Price</p>
                    <p className="font-medium flex items-center"><PhilippinePeso size={14}/>{product.product_price}</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <p className="font-medium text-gray-500">Status</p>
                    <p className={
                        product.stock_status === 'in_stock' ? 'font-medium text-green-500 capitalize' :
                        product.stock_status === 'low_stock' ? 'font-medium text-amber-500' : 'font-medium text-red-500'
                    }>
                        {product.stock}
                    </p>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                    <p className="font-medium text-gray-500">Expected Income</p>
                    <p className="text-xs text-muted-foreground">(Quantity x Price)</p>
                    <p className="font-medium flex items-center"><PhilippinePeso size={14}/>{product.expected_income.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}
