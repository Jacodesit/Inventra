import { router } from "@inertiajs/react"
import { Trash } from "lucide-react"
import { toast } from 'react-hot-toast';
import type { Product } from "@/types/inventory"
import { useRoute } from '../../../../vendor/tightenco/ziggy'


type pageProps = {
    product: Product
}

export default function DeleteProduct({product}:pageProps) {
    const route = useRoute();

    const handleDelete = (productId: number) => {
        router.delete(route('products.destroy', {product: productId}), {
            onSuccess: () => {
                toast.success('Product deleted successfully!');
            }
        })
    }
    return (
        <button
            onClick={() => handleDelete(product.id)}
            title="Delete Product"
            className="cursor-pointer transition-all duration-300 hover:text-red-500 "
        >
            <Trash strokeWidth={1.5} size={20}/>
        </button>
    )
}
