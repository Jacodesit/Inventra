import { useForm } from "@inertiajs/react"
import { toast } from 'react-hot-toast';
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    closeModal: () => void
}

export default function PasswordForm({closeModal}:pageProps) {
    const route = useRoute();

    const { data, setData, errors, processing, patch  } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        patch(route('settings.password.update'), {
            onSuccess: () => {
                closeModal();
                toast.success('Password updated successfully!');
            }
        })
    }

    return (
        <div className="py-5 px-4">
            <form onSubmit={submit} className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <label htmlFor="password" className="font-medium text-xs mb-1">Old Password</label>
                    <input
                        type="password"
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        className="border w-full p-2.5 rounded text-xs"
                    />
                    {errors.current_password && <p className="errors text-xs text-red-800">{errors.current_password}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="font-medium text-xs mb-1">New Password</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="border w-full p-2.5 rounded text-xs"
                    />
                    {errors.password && <p className="errors text-xs text-red-800">{errors.password}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password_confirmation" className="font-medium text-xs mb-1">Confirm New Password</label>
                    <input
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className="border w-full p-2.5 rounded text-xs"
                    />
                    {errors.password_confirmation && <p className="errors text-xs text-red-800">{errors.password_confirmation}</p>}
                </div>

                <div className="flex justify-end pt-5">
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                    >
                        {processing ? 'Updating Password...' : 'Update Password'}
                    </button>
                </div>
            </form>
        </div>
    )
}
