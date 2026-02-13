import { PhilippinePeso } from 'lucide-react';

import type { Product } from "@/types/inventory"
import type { Category } from '@/types/inventory';

import DeleteProduct from '../buttons/delete-product';
import EditProduct from '../buttons/edit-product';
import ViewProduct from '../buttons/view-product';

type pageProps = {
    products: Product[]
    categories: Category[]
}

export default function ProductsList({products, categories}:pageProps) {
    return (
        <div className="mt-5">
            <table className="w-full border-collapse">
                <thead className="bg-sidebar-color text-white">
                    <tr className="grid grid-cols-7 text-left p-5">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr
                            key={product.id}
                            className="grid grid-cols-7 text-sm border-b p-5 odd:bg-gray-100 even:bg-white"
                        >
                            <td className='line-clamp-1'>{product.product_name}</td>
                            <td>{product.product_description}</td>
                            <td>{product.product_quantity} packs</td>
                            <td>{product.category?.name}</td>
                            <td className='flex items-center'><PhilippinePeso size={15} />{product.product_price}</td>
                            <td className={
                                product.product_status === 'in_stock' ? 'text-green-500 capitalize' :
                                product.product_status === 'low_stock' ? 'text-amber-500' : 'text-red-500'
                            }>
                                {product.product_status.replace(/_/g, ' ').replace(/\b\w/g, c => c)}
                            </td>
                            <td className='flex items-center gap-2'>
                                <ViewProduct product={product}/>
                                <EditProduct product={product} categories={categories}/>
                                <DeleteProduct />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
