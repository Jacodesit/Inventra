import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";

export default function SignUpForm() {
    const { data, post, setData, errors, processing} = useForm({
        name: '',
        email: '',
        address: '',
        phone_number: '',
        business_title: '',
        password: '',
        password_confirmation: '',
    })

    const submit = (e:React.FormEvent) => {
        e.preventDefault();
        post('/register', {
            onSuccess: () => {
                toast.success('Account created successfully! You can now log in with your new account.');
            }
        });
    }

    return (
        <div className="p-5">
            <form onSubmit={submit} className='flex flex-col gap-4 text-sm'>
                <div>
                    <label
                        htmlFor="business_title"
                        className="font-medium text-xs"
                    >
                        Business Name
                    </label>
                    <input
                        type="text"
                        value={data.business_title}
                        onChange={(e) => setData('business_title', e.target.value)}
                        className="input-field"
                    />
                    {errors.business_title && <p className="errors text-xs text-red-700">{errors.business_title}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="name"
                            className="font-medium text-xs"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="John Doe"
                            className="input-field"
                        />
                        {errors.name && <p className="errors text-xs text-red-700">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="font-medium text-xs"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="johndoe@gmail.com"
                            className="input-field"
                        />
                        {errors.email && <p className="errors text-xs text-red-700">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="phone_number"
                            className="font-medium text-xs"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            placeholder="09123456789"
                            className="input-field"
                        />
                        {errors.phone_number && <p className="errors text-xs text-red-700">{errors.phone_number}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="address"
                            className="font-medium text-xs"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            placeholder="Barangay, Municipality, Province"
                            className="input-field"
                        />
                        {errors.address && <p className="errors text-xs text-red-700">{errors.address}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-medium text-xs"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Enter password"
                            className="input-field"
                        />
                        {errors.password && <p className="errors text-xs text-red-700">{errors.password}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="confirm-password"
                            className="font-medium text-xs"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder="Confirm password"
                            className="input-field"
                        />
                        {errors.password_confirmation && <p className="errors text-xs text-red-700">{errors.password_confirmation}</p>}
                    </div>
                </div>

                <div className="flex justify-end text-sm pt-5">
                    <button
                        disabled={processing}
                        className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm"
                    >
                        {processing ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    )
}
