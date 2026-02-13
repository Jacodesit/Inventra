import { useForm } from "@inertiajs/react"

import type { Product } from "@/types/inventory"
import type { Category } from "@/types/inventory"
import type { ProductForm } from "@/types/inventory"

import { CircleX } from "../../../../components/animate-ui/icons/circle-x";
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    product: Product;
    categories: Category[]
    onClose: () => void
}

export default function EditProductForm({categories, product, onClose}:pageProps) {
    const { data, put, setData, errors, processing, } = useForm<ProductForm>({
        product_image: null,
        product_image_remove: false,
        product_name: product.product_name,
        product_description: product.product_description,
        product_quantity: product.product_quantity,
        product_price: product.product_price,
        category_id: product.category?.id ?? 0,
    })

    const route = useRoute();

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        put(route('products.update', {product: product.id}), {
            onSuccess: () => {
                onClose();
            }

        })
    }

    return (
        <div className='flex flex-col gap-10'>
            <form className='' onSubmit={submit}>
                {/* Product */}
                <div className="flex flex-col gap-2 px-4 py-3">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_name" className="font-medium text-xs">Name</label>
                            <input
                                type="text"
                                value={data.product_name}
                                onChange={(e) => setData('product_name', e.target.value)}
                                placeholder="Product Name"
                                className="border w-full p-2.5 rounded text-xs"
                            />
                            {errors.product_name && <p className="errors text-red-800 text-xs">{errors.product_name}</p>}
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_quantity" className="font-medium text-xs">Quantity</label>
                            <input
                                type="number"
                                min={1}
                                step={1}
                                value={data.product_quantity}
                                onChange={(e) => setData('product_quantity', Number(e.target.value))}
                                placeholder="Product Quantity"
                                className="border w-full p-2.5 rounded text-xs"
                            />
                            {errors.product_quantity && <p className="errors text-red-800 text-xs">{errors.product_quantity}</p>}
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_price" className="font-medium text-xs">Price</label>
                            <input
                                type="number"
                                min={0}
                                step={0.01}
                                value={data.product_price}
                                onChange={(e) => setData('product_price', Number(e.target.value))}
                                placeholder="Product Price"
                                className="border w-full p-2.5 rounded text-xs"
                            />
                            {errors.product_price && <p className="errors text-red-800 text-xs">{errors.product_price}</p>}
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="category" className="font-medium text-xs">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={data.category_id}
                                onChange={(e) => setData('category_id', Number(e.target.value))}

                                className="border w-full p-2.5 rounded text-xs "
                            >
                                <option value="" disabled>
                                    Select category
                                </option>

                                {categories.map(category => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                        className="hover:bg-sidebar-color"
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category_id && <p className="errors text-red-800 text-xs">{errors.category_id}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="product_image" className="font-medium text-xs">Image</label>
                            <input
                                type="file"
                                accept="image"
                                onChange={(e) => setData('product_image', e.target.files ? e.target.files[0] : null)}
                                className="border w-full p-2.5 rounded text-xs"
                            />
                            {errors.product_image && <p className="errors text-red-800 text-xs">{errors.product_image}</p>}
                        </div>

                        <div>
                            <p className="font-medium text-xs mb-1">Image Preview</p>
                            <div className="gap-1 relative ">
                                <button
                                    className="absolute left-38 bottom-22"
                                    onClick={() => {
                                        setData('product_image_remove', true)
                                        setData('product_image', null)
                                    }}
                                >
                                    <CircleX
                                        animateOnHover
                                        size={20}
                                        className={`text-red-500 ${product.product_image !== null ? 'block' : 'hidden'}`}
                                    />
                                </button>

                                {product.product_image === null ? (
                                    <div className="border-l-4 border border-amber-500 p-5 rounded text-center bg-amber-50">
                                        <p className="text-xs text-amber-600 font-medium">This product have no image!</p>
                                    </div>
                                ) : (
                                    <img src={product.product_image} alt="Product Image" className="rounded h-30 w-45" />
                                )}
                            </div>
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_description" className="font-medium text-xs">Description</label>
                            <textarea
                                name="product_description"
                                id="product_description"
                                rows={5}
                                value={data.product_description}
                                onChange={(e) => setData('product_description', e.target.value)}
                                placeholder="Product Description"
                                className="border w-full p-2.5 rounded resize-none text-xs"
                            >
                            </textarea>
                            {errors.product_description && <p className="errors text-red-800 text-xs">{errors.product_description}</p>}
                        </div>


                    </div>

                    <div className="flex justify-end ">
                        <button
                            disabled={processing}
                            className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                        >
                            {processing ? 'Updating Item...' : 'Update Item'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
