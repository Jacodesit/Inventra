import { router } from "@inertiajs/react"
import { Trash } from "lucide-react"
import { toast } from 'react-hot-toast';
import type { Product } from "@/types/inventory"
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    product: Product
}

export default function PnlEditDelete({product}:pageProps) {
    const route = useRoute();

    const handleDelete = (productsId: number) => {
        router.delete(route('products.destroy', {product: productsId}), {
            onSuccess: () => {
                toast.success("Product deleted successfully")
            }
        })
    }

    return (
        <div>
            <div className="flex justify-end gap-2">
                <button
                    onClick={() => handleDelete(product.id)}
                    className="cursor-pointer border px-6 py-2 flex items-center gap-1 rounded transition-all duration-300 hover:bg-red-500 hover:text-white"
                >
                    <Trash size={15} />
                    Delete
                </button>
            </div>
        </div>
    )
}
