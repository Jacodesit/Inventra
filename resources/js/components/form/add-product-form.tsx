import { useForm } from "@inertiajs/react"

import type { Category } from "@/types/inventory"

type pageProps = {
    categories: Category[]
}

export default function AddProductForm({categories}:pageProps) {

    const { data,  setData, } = useForm({
        business_title: '',
        business_description: '',
        product_image: '',
        product_name: '',
        product_description: '',
        product_quantity: '',
        product_price: '',
        category: '',
    })

    return (
        <div className='flex flex-col gap-10'>
            <form className='grid grid-cols-2 gap-1' >
                {/* Business */}
                <div className="flex flex-col gap-2 px-4 py-3 ">
                    <h1 className="py-3 text-xl font-medium">Business</h1>
                    <div className="text-sm flex flex-col gap-1">
                        <label htmlFor="business_title" className="font-medium">Title</label>
                        <input
                            type="text"
                            value={data.business_title}
                            onChange={(e) => setData('business_title', e.target.value)}
                            placeholder="Business Title"
                            className="border w-full p-2.5 rounded"
                        />
                    </div>

                    <div className="text-sm flex flex-col gap-1">
                        <label htmlFor="business_description" className="font-medium">Description</label>
                        <textarea
                            name="business_description"
                            id="business_description"
                            rows={5}
                            value={data.business_description}
                            onChange={(e) => setData('business_description', e.target.value)}
                            placeholder="Business Description"
                            className="border w-full p-2.5 rounded resize-none"
                        >
                        </textarea>
                    </div>
                </div>

                {/* Product */}
                <div className="flex flex-col gap-2 px-4 py-3">
                    <h1 className="py-3 text-xl font-medium">Product</h1>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_name" className="font-medium">Name</label>
                            <input
                                type="text"
                                value={data.product_name}
                                onChange={(e) => setData('product_name', e.target.value)}
                                placeholder="Product Name"
                                className="border w-full p-2.5 rounded"
                            />
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_quantity" className="font-medium">Quantity</label>
                            <input
                                type="number"
                                min={1}
                                step={1}
                                value={data.product_quantity}
                                onChange={(e) => setData('product_quantity', e.target.value)}
                                placeholder="Product Quantity"
                                className="border w-full p-2.5 rounded"
                            />
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_price" className="font-medium">Price</label>
                            <input
                                type="number"
                                min={0}
                                step={0.01}
                                value={data.product_price}
                                onChange={(e) => setData('product_price', e.target.value)}
                                placeholder="Product Price"
                                className="border w-full p-2.5 rounded"
                            />
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="category" className="font-medium">Category</label>
                            <select
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                name="category"
                                id="category"
                                className="border w-full p-2.5 rounded"
                            >
                                {categories.map(category => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="product_image" className="font-medium">Image</label>
                            <input
                                type="file"
                                accept="image"
                                className="border w-full p-2.5 rounded"
                            />
                        </div>

                        <div className="text-sm flex flex-col gap-1">
                            <label htmlFor="product_description" className="font-medium">Description</label>
                            <textarea
                                name="product_description"
                                id="product_description"
                                rows={5}
                                value={data.product_description}
                                onChange={(e) => setData('product_description', e.target.value)}
                                placeholder="Product Description"
                                className="border w-full p-2.5 rounded resize-none"
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
