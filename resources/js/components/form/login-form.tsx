import { Mail } from 'lucide-react';
import { FileLock } from 'lucide-react';
import { LogIn } from 'lucide-react';

export default function LoginForm() {
    return (
        <div>
            <form className='flex flex-col gap-3'>
                <div>
                    <label
                        htmlFor="email"
                        className='text-sm font-medium'
                    >
                        Email
                    </label>
                    <div className="flex items-center border rounded-lg">
                        <div className='px-3 border-r'>
                            <Mail strokeWidth={1} />
                        </div>

                        <input
                            type="email"
                            placeholder='johndoe@gmail.com'
                            className='w-full py-4 focus:outline-none text-sm pl-3'
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className='text-sm font-medium'
                    >
                            Password
                    </label>
                    <div className="flex items-center border rounded-lg">
                        <div className='px-3 border-r'>
                            <FileLock strokeWidth={1} />
                        </div>

                        <input
                            type="password"
                            placeholder='Password'
                            className='w-full py-4 focus:outline-none text-sm pl-3'
                        />
                    </div>
                </div>

                <div className='mt-2 flex flex-col gap-10 text-center'>
                    <button
                        className='border w-full p-3 rounded-lg flex items-center justify-center gap-1 font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer'
                    >
                        Login
                        <LogIn strokeWidth={2} size={18} />
                    </button>

                    <p className='text-xs'>No account yet?
                        <button
                            className='px-1 text-red-500 cursor-pointer transition-all duration-300 hover:font-medium'
                        >
                            Sign up
                        </button>
                        now!
                    </p>
                </div>
            </form>
        </div>
    )
}
