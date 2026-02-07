import { useForm } from "@inertiajs/react";

export default function SignUpForm() {
    const { data, post, setData, errors, processing} = useForm({
        name: '',
        email: '',
        address: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
    })

    const submit = (e:React.FormEvent) => {
        e.preventDefault();
        post('/register');
    }

    return (
        <div className="p-5">
            <form onSubmit={submit} className='flex flex-col gap-4 text-sm'>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="name"
                            className="font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="John Doe"
                            className="border w-full p-2.5 rounded"
                        />
                        {errors.name && <p className="errors text-xs text-red-700">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="johndoe@gmail.com"
                            className="border w-full p-2.5 rounded"
                        />
                        {errors.email && <p className="errors text-xs text-red-700">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="phone_number"
                            className="font-medium"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            placeholder="09123456789"
                            className="border w-full p-2.5 rounded"
                        />
                        {errors.phone_number && <p className="errors text-xs text-red-700">{errors.phone_number}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="address"
                            className="font-medium"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            placeholder="Barangay, Municipality, Province"
                            className="border w-full p-2.5 rounded"
                        />
                        {errors.address && <p className="errors text-xs text-red-700">{errors.address}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-medium"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Enter password"
                            className="border w-full p-2.5 rounded"
                        />
                        {errors.password && <p className="errors text-xs text-red-700">{errors.password}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="confirm-password"
                            className="font-medium"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder="Confirm password"
                            className="border w-full p-2.5 rounded"
                        />
                        {errors.password_confirmation && <p className="errors text-xs text-red-700">{errors.password_confirmation}</p>}
                    </div>
                </div>

                <div className="flex justify-end text-sm">
                    <button
                        disabled={processing}
                        className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer"
                    >
                        {processing ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    )
}
