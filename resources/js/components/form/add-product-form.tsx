import { useForm } from "@inertiajs/react"
import { toast } from 'react-hot-toast';
import type { Category } from "@/types/inventory"
import type { ProductForm } from "@/types/inventory"

type pageProps = {
    categories: Category[]
    onClose: () => void
}

export default function AddProductForm({categories, onClose}:pageProps) {
    const { data, post, setData, errors, processing, } = useForm<ProductForm>({
        product_image_remove: false,
        product_image: null,
        product_name: '',
        product_description: '',
        product_quantity: '',
        product_price: '',
        category_id: '',
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/products', {
            forceFormData: true,
            onSuccess: () => {
                onClose();
                toast.success('Product added successfully');
            }
        });
    }

    return (
        <div className='flex flex-col gap-10'>
            <form onSubmit={submit}>
                {/* Product */}
                <div className="flex flex-col gap-2 px-4 py-3">
                    <div className="grid grid-cols-2 gap-3">
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
                                onChange={(e) => setData('product_quantity', e.target.value)}
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
                                onChange={(e) => setData('product_price', e.target.value)}
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
                                onChange={(e) => setData('category_id', e.target.value)}

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

                    <div className="flex justify-end py-5">
                        <button
                            disabled={processing}
                            className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                        >
                            {processing ? 'Adding Item...' : 'Add Item'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
