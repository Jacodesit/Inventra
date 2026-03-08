import { useForm } from "@inertiajs/react"
import { toast } from 'react-hot-toast';
import type { Category } from "@/types/inventory"
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    category: Category
    onClose: () => void
}

export default function EditCategoryForm({category, onClose}:pageProps) {
    const { data, put, setData, errors, processing } = useForm({
        name: category.name,
        description: category.description
    })

    const route = useRoute()

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        put(route('category.update', {category: category.id}), {
            onSuccess: () => {
                onClose()
                toast.success('Category updated successfully!');
            }
        })
    }

    return (
        <div className="flex flex-col gap-10 font-normal ">
            <form onSubmit={submit}>
                <div className="flex flex-col justify-between h-[76vh] px-4 py-3">
                    <div>
                        <div className="grid grid-rows-1 gap-2">
                            {/* Category Name */}
                            <div className="text-sm flex flex-col gap-1">
                                <label htmlFor="name" className="font-medium text-xs">Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Product Name"
                                    className="border w-full p-2.5 rounded text-xs font-normal"
                                />
                                {errors.name && <p className="errors text-red-800 text-xs">{errors.name}</p>}
                            </div>

                            {/* Category Description */}
                            <div className="text-sm flex flex-col gap-1">
                                <label htmlFor="description" className="font-medium text-xs">Description</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    rows={5}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="border w-full p-2.5 rounded resize-none text-xs font-normal"
                                ></textarea>
                                {errors.description && <p className="errors text-red-500 text-xs">{errors.description}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            disabled={processing}
                            className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                        >
                            {processing ? 'Updating Category...' : 'Update'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
