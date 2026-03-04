import type { Category } from "@/types/inventory";

import EditCategoryForm from "../form/edit-category";
import EditCategoryHeading from "../headings/edit-category-heading";

type pageProps = {
    category: Category
    onClose: () => void
    openEditCategory: boolean
}

export default function EditCategoryModal({category, onClose, openEditCategory}:pageProps) {
    if (!openEditCategory) return null;
    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex justify-end z-500 ">
            <div className="bg-slate-100 rounded max-w-lg w-screen flex flex-col relative px-8 py-5 transition-all duration-300">
                <EditCategoryHeading onClose={onClose} />
                <div className="">
                    <EditCategoryForm category={category} onClose={onClose}/>
                </div>
            </div>

        </main>
    )
}
