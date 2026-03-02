import { PackageSearch } from 'lucide-react';

import type { Product } from "@/types/inventory"

type pageProps = {
    lowStock: Product[]
}

export default function LowStock({lowStock}:pageProps) {
    return (
        <div className="w-full">
            <div className="flex gap-1 items-center mb-2">
                <p className="font-semibold text-xl text-amber-500">Low Stock Items</p>
                <span className="text-xs">(View all low stock items in products page)</span>
            </div>
            {lowStock.length === 0 ? (
                <div className="text-center h-40 flex flex-col gap-1 justify-center items-center">
                    <PackageSearch className='text-gray-500' strokeWidth={1}/>
                    <p className="text-xs text-gray-500">No low stock items for this moment!</p>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-2">
                    {lowStock.map(stock => (
                        <div className="border p-5 rounded-md" key={stock.product_code} >
                            <div className="">
                                <div className="flex justify-between">
                                    <p className="font-medium">{stock.product_name}</p>
                                    <p className="text-xs text-gray-500">{stock.product_quantity} pack(s)</p>
                                </div>
                                <p className="text-xs text-gray-500">{stock.product_code} </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
