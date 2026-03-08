import { useForm } from "@inertiajs/react"
import { useState  } from "react"

import type { Product } from "@/types/inventory"

type pageProps = {
    products: Product[]
}

export default function SalesForm({products}:pageProps) {
    const { data, setData, errors, processing } = useForm({
        product_id: '',
        quantity: '',
    })

    const [ selectedProductId, setSelectedProductId ] = useState<number | "">("");
    const [ price, setPrice ] = useState<number>(0);

    const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = Number(e.target.value);
        setSelectedProductId(id);

        const product = products.find(p => p.id === id);
        const newPrice = product ? product.product_price : 0;
        setPrice(newPrice);

        setTotal(quantity * newPrice);
    };

    const [ quantity, setQuantity ] = useState<number>(0);
    const [ total, setTotal ] = useState<number>(0);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const qty =  Number(e.target.value);
        setQuantity(qty)
        setTotal(qty * price);
    }

    return (
        <div className="px-4 py-3">
            <form className="">
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="products" className="font-medium text-sm">Products</label>
                        <select
                            name="product"
                            id="product"
                            className="border w-full p-2.5 rounded text-sm "
                            value={selectedProductId}
                            onChange={handleProductChange}
                        >
                            <option value="">Select Product</option>
                            {products.map(product =>(
                                <option
                                    key={product.id}
                                    value={product.id}
                                >
                                    {product.product_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="products" className="font-medium text-sm">Quantity</label>
                        <input
                            type="number"
                            placeholder="How many customer bought"
                            className="border w-full p-2.5 rounded text-sm"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="products" className="font-medium text-sm">Price</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="border w-full p-2.5 rounded text-sm"
                            value={price}
                            readOnly
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="products" className="font-medium text-sm">Total</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="border w-full p-2.5 rounded text-sm"
                            value={total}
                            readOnly
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="products" className="font-medium text-sm">Type</label>
                        <select
                            name="type"
                            id="type"
                            className="border w-full p-2.5 rounded text-sm"
                        >
                            <option value="">Type of Sale</option>
                            <option value="sales_in">Sales In</option>
                            <option value="sales_out">Sales Out</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end py-5">
                    <div className="flex gap-1">
                        <button
                            className="px-6 py-2 border rounded transition-all duration-300 cursor-pointer text-sm"
                        >
                            Cancel
                        </button>

                        <button
                            className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                        >
                            Save Sale
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
