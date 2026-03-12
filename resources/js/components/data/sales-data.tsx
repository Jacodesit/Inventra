import { usePage } from "@inertiajs/react"
import { PhilippinePeso } from "lucide-react"
import type { Sale } from "@/types/inventory"

type pageProps = {
    sales: Sale[]
}

export default function SalesData() {
    const { sales } = usePage<pageProps>().props
    return (
        <div>
            <div className="mt-5 flex flex-col justify-between h-[75vh]">
                <table className="w-full border-collapse">
                    <thead className="bg-sidebar-color text-white">
                        <tr className="grid grid-cols-7 text-left p-5">
                            <th>Sale ID</th>
                            <th>Product Name</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => (
                            <tr
                                key={sale.id}
                                className="grid grid-cols-7 text-sm border-b p-5 odd:bg-gray-100 even:bg-white"
                            >
                                <td>{sale.id}</td>
                                <td>{sale.product?.product_name}</td>
                                <td>{sale.product_id}</td>
                                <td>{sale.quantity}</td>
                                <td className='flex items-center'><PhilippinePeso size={15} />{sale.price}</td>
                                <td className='flex items-center'><PhilippinePeso size={15} />{sale.total}</td>
                                {new Date(sale.created_at).toLocaleString('en-US',{
                                    year:'numeric',
                                    month:'short',
                                    day:'numeric',
                                    hour:'2-digit',
                                    minute:'2-digit'
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
