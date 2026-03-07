import { useForm } from "@inertiajs/react"
import { useRoute } from '../../../../vendor/tightenco/ziggy'

export default function EmailForm() {
    const route = useRoute();
    const { data, setData, processing, post, errors, reset } = useForm({
        email: ''
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('password.email'), {
            onSuccess: () => {
                alert('Email sent successfully!')
                reset();
            }
        })
    }

    return (
        <div>
            <form onSubmit={submit} className="flex flex-col gap-2 px-4 py-3">
                <div className="text-sm flex flex-col gap-1">
                    <label htmlFor="product_name" className="font-medium text-xs">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Enter the email that associated to that account"
                        className="border w-full p-2.5 rounded text-xs"
                    />
                    {errors.email && <p className="errors text-xs text-red-800">{errors.email}</p>}
                </div>

                <div className="flex justify-end pt-5">
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                    >
                        {processing ? 'Proceeding...' : 'Proceed'}
                    </button>
                </div>
            </form>
        </div>
    )
}
