import { Link } from "@inertiajs/react"

import { ChevronLeft, ChevronRight } from "lucide-react"

import type { Category } from "@/types/inventory"
import DeleteCategory from "../buttons/delete-category"
import EditCategory from "../buttons/edit-categories"

type pageProps = {
    categories: {
        data: Category[]
        links: {
            url: string | null
            label: string
            active: boolean
        }[]
    }
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
                        {categories.data.map(category => (
                            <tr
                                key={category.id}
                                className="grid grid-cols-4 text-sm border-b p-5 odd:bg-gray-100 even:bg-white"
                            >
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>{category.products_quantity}</td>
                                <th className="text-left flex gap-2">
                                    <EditCategory category={category}/>
                                    <DeleteCategory category={category} />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex gap-2 mt-4 justify-end">
                    {categories.links.map((link, index) => {
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
