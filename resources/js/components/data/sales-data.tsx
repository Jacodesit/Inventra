import { usePage } from "@inertiajs/react"
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
                        <tr className="grid grid-cols-6 text-left p-5">
                            <th>ID</th>
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
                                className="grid grid-cols-6 text-sm border-b p-5 odd:bg-gray-100 even:bg-white"
                            >
                                <td>{sale.id}</td>
                                <td>{sale.product_id}</td>
                                <td>{sale.quantity}</td>
                                <td>{sale.price}</td>
                                <td>{sale.total}</td>
                                <td>{sale.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
