import { useForm } from "@inertiajs/react"
import { toast } from 'react-hot-toast';
import type { Auth } from "@/types"
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    auth: Auth;
    closeModal: () => void
}

export default function UserInfoForm({auth, closeModal}:pageProps) {
    const route = useRoute();

    const {data, setData, errors, processing, patch} = useForm({
        business_title: auth.user.business_title,
        name: auth.user.name,
        email: auth.user.email,
        address: auth.user.address,
        phone_number: auth.user.phone_number
    })

    const submit = (e:React.FormEvent) => {
        e.preventDefault()
        patch(route('profile.update'), {
            onSuccess: () => {
                closeModal();
                toast.success('Profile updated successfully!');
            }
        })
    }


    return (
        <form onSubmit={submit} className="w-1/2 flex flex-col gap-2">
            <h1 className="mb-1 bg-blue-100 px-3 border-l-4 border-l-blue-500 py-2 rounded text-xs">EDIT INFORMATION</h1>
            <div className="flex flex-col">
                <label htmlFor="business_title" className="text-xs text-gray-400 mb-1">BUSINESS NAME</label>
                <input
                    type="text"
                    value={data.business_title}
                    onChange={(e) => setData('business_title', e.target.value)}
                    className="border w-full p-2.5 rounded text-xs"
                />
                {errors.business_title && <p className="errors text-xs text-red-800">{errors.business_title}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-xs text-gray-400 mb-1">BUSINESS OWNER</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="border w-full p-2.5 rounded text-xs"
                />
                {errors.name && <p className="errors text-xs text-red-800">{errors.name}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-xs text-gray-400 mb-1">EMAIL</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className="border w-full p-2.5 rounded text-xs"
                />
                {errors.email && <p className="errors text-xs text-red-800">{errors.email}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="address" className="text-xs text-gray-400 mb-1">ADDRESS</label>
                <input
                    type="text"
                    value={data.address}
                    onChange={(e) => setData('address', e.target.value)}
                    className="border w-full p-2.5 rounded text-xs"
                />
                {errors.address && <p className="errors text-xs text-red-800">{errors.address}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="address" className="text-xs text-gray-400 mb-1">PHONE NUMBER</label>
                <input
                    type="tel"
                    value={data.phone_number}
                    onChange={(e) => setData('phone_number', e.target.value)}
                    className="border w-full p-2.5 rounded text-xs"
                />
                {errors.phone_number && <p className="errors text-xs text-red-800">{errors.phone_number}</p>}
            </div>

            <div className="flex justify-end pt-5">
                <button
                    type="submit"
                    disabled={processing}
                    className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                >
                    {processing ? 'Updating...' : 'Update'}
                </button>
            </div>
        </form>
    )
}
