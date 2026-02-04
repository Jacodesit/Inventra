import { usePage } from "@inertiajs/react";

import type { Category } from "@/types/inventory"

type pageProps = {
    categories: Category[];
}

export default function SignUpForm() {
    const { categories = [] } = usePage<pageProps>().props;
    return (
        <div className="p-5">
            <form className='flex flex-col gap-4 text-sm'>
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
                            placeholder="John Doe"
                            className="border w-full p-2.5 rounded"
                        />
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
                            placeholder="johndoe@gmail.com"
                            className="border w-full p-2.5 rounded"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="email"
                        className="font-medium"
                    >
                        Category
                    </label>
                    <select
                        name="category"
                        id="category"
                        className="w-full p-2.5 border rounded"
                    >
                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
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
                            placeholder="Enter password"
                            className="border w-full p-2.5 rounded"
                        />
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
                            placeholder="Confirm password"
                            className="border w-full p-2.5 rounded"
                        />
                    </div>
                </div>
            </form>

            <div className="flex justify-end pt-5 text-sm">
                <button className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white">
                    Sign Up
                </button>
            </div>
        </div>
    )
}
