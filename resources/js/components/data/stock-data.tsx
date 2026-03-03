import { Link } from "@inertiajs/react"

import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"

import type { Product, Category } from "@/types/inventory"

type pageProps = {
    products: {
        data: Product[];
        links: { url: string | null; label: string; active: boolean }[];
    };
    categories: Category[]
    quantities: Record<number, number>
    increment: (id: number) => void
    decrement: (id: number) => void
}

export default function StockData({products, quantities, increment, decrement}:pageProps) {

    return (
        <div className="mt-5 flex flex-col justify-between h-[75vh]">
            <table className="w-full border-collapse">
                <thead className="bg-sidebar-color text-white">
                    <tr className="grid grid-cols-6 text-left p-5">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Current Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.data.map(product => (
                        <tr
                            key={product.id}
                            className="grid grid-cols-6 text-sm border-b p-5 odd:bg-gray-100 even:bg-white items-center"
                        >
                            <td>{product.product_code}</td>
                            <td className='line-clamp-1'>{product.product_name}</td>

                            <td>{product.category?.name}</td>
                            <td className={
                                product.stock_status === 'in_stock' ? 'text-green-500 capitalize' :
                                product.stock_status === 'low_stock' ? 'text-amber-500' : 'text-red-500'
                            }>
                                {product.stock}
                            </td>
                            <td>{product.product_quantity}</td>
                            <td className='flex items-center gap-2'>
                                <div className="flex items-center border rounded-md">
                                    {/* Decrement */}
                                    <div className="transition-all duration-300 hover:bg-gray-200 rounded-tl-sm rounded-bl-sm ">
                                        <button
                                            className="px-3 py-2 flex items-center justify-center cursor-pointer "
                                        onClick={() => decrement(product.id)}
                                        >
                                            -
                                        </button>
                                    </div>

                                    {/* Count */}
                                    <div className="border-r border-l px-3">
                                        {quantities[product.id]}
                                    </div>
                                    {/* Increment */}
                                    <div className="transition-all duration-300 hover:bg-gray-200 rounded-tr-sm rounded-br-sm ">
                                        <button
                                            className="px-3 py-2 flex items-center justify-center cursor-pointer rounded-tr-lg"
                                            onClick={() => increment(product.id)}
                                        >
                                            +
                                        </button>
                                    </div>

                                </div>
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
