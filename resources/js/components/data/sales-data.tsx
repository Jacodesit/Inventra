import { usePage, Link } from "@inertiajs/react"
import { PhilippinePeso, ChevronLeft, ChevronRight } from "lucide-react"
import type { Sale } from "@/types/inventory"

type pageProps = {
    sales: {
            data: Sale[]
            links: {
                url: string | null
                label: string
                active: boolean
            }[]
        }
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
                        {sales.data.map(sale => (
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
                <div className="flex gap-2 mt-4 justify-end">
                    {sales.links.map((link, index) => {
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
        </div>
    )
}
