import { Trash } from "lucide-react"

export default function DeleteProduct() {
    return (
        <button
            title="Delete Product"
            className="cursor-pointer transition-all duration-300 hover:text-red-500 "
        >
            <Trash strokeWidth={1.5} size={20}/>
        </button>
    )
}
