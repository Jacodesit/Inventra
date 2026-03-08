import { router } from "@inertiajs/react";
import { Trash } from "lucide-react";
import { toast } from 'react-hot-toast';
import type { Category } from "@/types/inventory";
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    category: Category
}

export default function DeleteCategory({category}:pageProps) {
    const route = useRoute()

    const deleteCategory = (categoryId: number) => {
        router.delete(route('category.delete', {category: categoryId}), {
            onSuccess: () => {
                toast.success('Category deleted successfully!');
            }
        })

    }
    return (
        <div>
            <button>
                <button
                    onClick={() => deleteCategory(category.id)}
                    title="Delete Category"
                    className="cursor-pointer transition-all duration-300 hover:text-red-500 "
                >
                    <Trash strokeWidth={1.5} size={20} />
                </button>
            </button>
        </div>
    )
}
