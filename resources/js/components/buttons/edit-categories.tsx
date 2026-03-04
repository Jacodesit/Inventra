import { SquarePen } from "lucide-react";

import { useState } from "react";

import type { Category } from "@/types/inventory";
import EditCategoryModal from "../modal/edit-category-modal";

type pageProps = {
    category: Category
}

export default function EditCategory({category}:pageProps) {
    const [openEditCategory, setOpenEditCategory] = useState(false)

    return (
        <div className="flex items-center">
            <button
                onClick={() => setOpenEditCategory(true)}
                title="View Product"
                className="cursor-pointer transition-all duration-300 hover:text-blue-500"
            >
                <SquarePen strokeWidth={1.5} size={20} />
            </button>
            <EditCategoryModal
                category={category}
                openEditCategory={openEditCategory}
                onClose={() => setOpenEditCategory(false)}
            />
        </div>
    )
}
