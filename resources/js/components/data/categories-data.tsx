import { SquarePen } from "lucide-react"
import { Trash } from "lucide-react"

import type { Category } from "@/types/inventory"

type pageProps = {
    categories: Category[]
}

export default function CategoriesList({categories}:pageProps) {
    return (
        <div>
            <div className="mt-5 flex flex-col justify-between h-[75vh]">
                <table className="w-full border-collapse">
                    <thead className="bg-sidebar-color text-white">
                        <tr className="grid grid-cols-4 text-left p-5">
                            <th>Name</th>
                            <th>Description</th>
                            <th>Products Count</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr
                                key={category.id}
                                className="grid grid-cols-4 text-sm border-b p-5 odd:bg-gray-100 even:bg-white"
                            >
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>{category.products_quantity}</td>
                                <th className="text-left flex gap-2">
                                    <button>
                                        <SquarePen strokeWidth={1.5} size={20} />
                                    </button>
                                    <button>
                                        <Trash strokeWidth={1.5} size={20} />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
