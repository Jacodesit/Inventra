import { SquarePen } from "lucide-react"

export default function EditProduct() {
    return (
        <button
            title="Edit Product"
            className="cursor-pointer transition-all duration-300 hover:text-green-500 "
        >
            <SquarePen strokeWidth={1.5} size={20} />
        </button>
    )
}
