import { Link } from '@inertiajs/react';

import { ChevronRight, PhilippinePeso } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import type { Product } from "@/types/inventory"
import type { Category } from '@/types/inventory';

import DeleteProduct from '../buttons/delete-product';
import EditProduct from '../buttons/edit-product';
import ViewProduct from '../buttons/view-product';

type pageProps = {
    products: {
        data: Product[]
        links: {
            url: string | null
            label: string
            active: boolean
        }[]
    }
    categories: Category[]
}

export default function ProductsList({products, categories}:pageProps) {
    return (
        <div className="mt-5 flex flex-col justify-between h-[75vh]">
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
                    {products.data.map(product => (
                        <tr
                            key={product.id}
                            className="grid grid-cols-7 text-sm border-b p-5 odd:bg-gray-100 even:bg-white"
                        >
                            <td className='line-clamp-1'>{product.product_name}</td>
                            <td>{product.product_description}</td>
                            <td>{product.product_quantity} pack(s)</td>
                            <td>{product.category?.name}</td>
                            <td className='flex items-center'><PhilippinePeso size={15} />{product.product_price}</td>
                            <td className={
                                product.stock_status === 'in_stock' ? 'text-green-500 capitalize' :
                                product.stock_status === 'low_stock' ? 'text-amber-500' : 'text-red-500'
                            }>
                                {product.stock}
                            </td>
                            <td className='flex items-center gap-2'>
                                <ViewProduct product={product} categories={categories}/>
                                <EditProduct product={product} categories={categories}/>
                                <DeleteProduct product={product} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex gap-2 mt-4 justify-end">
                {products.links.map((link, index) => {
                    let label: React.ReactNode = link.label;

                    if (label && typeof label === "string" && label.includes("Previous")) {
                        label = <ChevronLeft size={16} />;
                    }

                    if (label && typeof label === "string" && label.includes("Next")) {
                        label = <ChevronRight size={16} />;
                    }

                    return (
                        <Link
                            key={index}
                            href={link.url ?? ""}
                            className={`px-3 py-1 border text-sm rounded-md ${
                                link.active ? "bg-gray-800 text-white" : ""
                            } ${!link.url ? "opacity-50 pointer-events-none" : ""}`}
                        >
                            {label}
                        </Link>
                    );

                })}
            </div>
        </div>
    )
}
