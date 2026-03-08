import { useForm } from '@inertiajs/react'
import { Box } from 'lucide-react'
import { toast } from 'react-hot-toast';
import { useRoute } from '../../../../vendor/tightenco/ziggy'

type pageProps = {
    token: string
    email: string,
    appName: string
}

export default function ResetPassword({token, email, appName}:pageProps) {
    const route = useRoute();

    const { data, setData, processing, post, errors, reset} = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: ''
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.update'), {
            preserveScroll: true,
            onFinish: () => {
                reset('password', 'password_confirmation');
                window.location.href = route('/');
                toast.success('Password reset successfully! You can now log in with your new password.');
            }
        });
    }

    return (
        <main className=''>
            <div className="flex items-center justify-center h-screen w-full relative">
                {/* Dashed Bottom Fade Grid */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                    backgroundImage: `
                        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 0",
                    maskImage: `
                        repeating-linear-gradient(
                            to right,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                            ),
                            repeating-linear-gradient(
                            to bottom,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                            ),
                            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
                    `,
                    WebkitMaskImage: `
                repeating-linear-gradient(
                            to right,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                            ),
                            repeating-linear-gradient(
                            to bottom,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                            ),
                            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
                    `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                    }}
                />
                <div className='p-10 w-full max-w-xl flex flex-col gap-5 rounded-md shadow bg-white z-10'>
                    <div className='flex items-center gap-1 mb-5'>
                        <Box />
                        <h1 className='text-2xl font-medium'>{appName}</h1>
                    </div>
                    <div className='mb-2'>
                        <h2 className='text-lg   font-medium'>Reset Password</h2>
                        <p className='text-xs text-gray-500'>Create a new password. Make sure it is strong and easy for you to remember.</p>
                    </div>
                    <form onSubmit={submit} className='flex flex-col gap-2'>
                        <input type="hidden" value={data.token} />
                        <div className="flex flex-col gap-1">
                            <label htmlFor="product_name" className="font-medium text-xs">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder={email}
                                className="border w-full p-3 rounded text-xs"
                            />
                            {errors.email && <p className="errors text-xs text-red-800">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="font-medium text-xs mb-1">New Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="border w-full p-3 rounded text-xs"
                            />
                            {errors.password && <p className="errors text-xs text-red-800">{errors.password}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password_confirmation" className="font-medium text-xs mb-1">Confirm New Password</label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="border w-full p-3 rounded text-xs"
                            />
                            {errors.password_confirmation && <p className="errors text-xs text-red-800">{errors.password_confirmation}</p>}
                        </div>

                        <div className="flex justify-end pt-5">
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-3 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                            >
                                {processing ? 'Resetting Password...' : 'Reset Password'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
