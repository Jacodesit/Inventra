import { PenBoxIcon } from "lucide-react"
import { Trash } from "lucide-react"

export default function PnlEditDelete() {
    return (
        <div className="flex justify-end gap-2">
            <button
                className="cursor-pointer border px-6 py-2 flex items-center gap-1 rounded transition-all duration-300 hover:bg-green-500 hover:text-white"
            >
                <PenBoxIcon size={15} />
                Edit
            </button>

            <button
                className="cursor-pointer border px-6 py-2 flex items-center gap-1 rounded transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
                <Trash size={15} />
                Delete
            </button>
        </div>
    )
}
