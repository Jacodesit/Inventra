import { useForm } from "@inertiajs/react"
import { toast } from 'react-hot-toast';

type pageProps = {
    onClose: () => void
}

export default function AddCategoryForm({onClose}:pageProps) {
    const {data, post, setData, errors, processing} = useForm({
        name: '',
        description: ''
    })

    const submit = (e:React.FormEvent) => {
        e.preventDefault();
        post('/categories', {
            onSuccess: () => {
                onClose();
                toast.success('Category added successfully!');
            }
        });
    }

    return (
        <div className='px-4 py-3'>
            <form className='flex flex-col gap-2' onSubmit={submit}>
                <div>
                    <label htmlFor="name" className="font-medium text-xs">Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="input-field"
                    />
                    {errors.name && <p className="errors text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="description" className="font-medium text-xs">Description</label>
                    <textarea
                        rows={5}
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        name="description"
                        id="description"
                        className="input-field text-xs"
                    ></textarea>
                    {errors.description && <p className="errors text-red-500 text-xs">{errors.description}</p>}
                </div>

                <div className="flex justify-end ">
                    <button
                        disabled={processing}
                        className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                    >
                        {processing ? 'Adding category' : 'Add category'}
                    </button>
                </div>
            </form>
        </div>
    )
}
