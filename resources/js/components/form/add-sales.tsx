import { useForm } from "@inertiajs/react"
import { useState } from "react"
import type { Product } from "@/types/inventory"
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    products: Product[]
    onClose: () => void
}

export default function SalesForm({ products, onClose }: pageProps) {
    const route = useRoute()

    const { data, setData, errors, processing, post, reset } = useForm({
        product_id: '',
        quantity: '',
        price: '',
        total: '',
    })

    const [price, setPrice] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)

    const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value
        setData('product_id', id)

        const product = products.find(p => p.id.toString() === id)
        const newPrice = product ? product.product_price : 0
        setPrice(newPrice)
        setData('price', newPrice.toString())

        const qty = Number(data.quantity) || 0
        setTotal(qty * newPrice)
        setData('total', (qty * newPrice).toString())
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const qty = Number(e.target.value)
        setData('quantity', qty.toString())
        setTotal(qty * price)
        setData('total', (qty * price).toString())
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('sales.store'), {
            onSuccess: () => {
                reset()
                onClose()
            }
        })
    }

    return (
        <div className="px-4 py-3">
            <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="product" className="font-medium text-xs">Products</label>
                        <select
                            name="product"
                            id="product"
                            className="input-field"
                            value={data.product_id}
                            onChange={handleProductChange}
                        >
                            <option value="">Select Product</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>
                                    {product.product_name}
                                </option>
                            ))}
                        </select>
                        {errors.product_id && <p className="errors text-xs text-red-500">{errors.product_id}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="quantity" className="font-medium text-xs">Quantity</label>
                        <input
                            type="number"
                            placeholder="How many customer bought"
                            className="input-field"
                            value={data.quantity}
                            onChange={handleQuantityChange}
                        />
                        {errors.quantity && <p className="errors text-xs text-red-500">{errors.quantity}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="price" className="font-medium text-xs">Price</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="input-field"
                            value={price}
                            readOnly
                        />
                        {errors.price && <p className="errors text-xs text-red-500">{errors.price}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="total" className="font-medium text-xs">Total</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="input-field"
                            value={total}
                            readOnly
                        />
                        {errors.total && <p className="errors text-xs text-red-500">{errors.total}</p>}
                    </div>
                </div>

                <div className="flex justify-end pt-5">
                    <div className="flex gap-1">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 border rounded transition-all duration-300 cursor-pointer text-sm"
                        >
                            Cancel
                        </button>

                        <button
                            disabled={processing}
                            className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                        >
                            {processing ? 'Adding Sale...' : 'Add Sale'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
