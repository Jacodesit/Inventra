import { useForm } from '@inertiajs/react';

import { Mail } from 'lucide-react';
import { FileLock } from 'lucide-react';
import { LogIn } from 'lucide-react';

import { useState } from 'react';

import ResetPasswordModal from '../modal/reset-password-modal';
import Signup from '../modal/signup-modal';

export default function LoginForm() {
    const [openModal, setOpenModal] = useState(false);
    const [openResetModal, setResetModal] = useState(false);
    const { data, post, setData, errors, processing } = useForm({
        email: '',
        password: ''
    })

    const submit = (e:React.FormEvent) => {
        e.preventDefault();
        post('/login');
    }
    return (
        <div className='flex flex-col gap-10'>
            <form className='flex flex-col gap-3' onSubmit={submit}>
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
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder='johndoe@gmail.com'
                            className='w-full py-4 focus:outline-none text-sm pl-3'
                        />
                    </div>
                    {errors.email && <p className='errors text-xs text-red-800'>{errors.email}</p>}
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
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder='Password'
                            className='w-full py-4 focus:outline-none text-sm pl-3'
                        />
                    </div>
                    {errors.password && <p className='errors text-xs text-red-800'>{errors.password}</p>}
                </div>

                <div className='mt-2 flex flex-col gap-10 text-center'>
                    <button
                        className='border w-full p-3 rounded-lg flex items-center justify-center gap-1 font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer'
                    >
                        {processing ? 'Logging in...' : 'Log In'}
                        <LogIn strokeWidth={2} size={18} />
                    </button>
                </div>
            </form>

            <div className='flex items-center gap-2 justify-center'>
                <p className='text-xs'>No account yet?
                    <button
                        onClick={() => setOpenModal(true)}
                        className='px-1 text-red-500 cursor-pointer transition-all duration-300 hover:underline'
                    >
                        Sign up
                    </button>
                    now!
                </p>

                <p>|</p>

                <button
                    onClick={() => setResetModal(true)}
                    className='text-xs transition-all duration-300 hover:text-red-800 cursor-pointer'
                >
                    Forgot Password
                </button>
            </div>

            <div className='flex justify-end mt-1'>

            </div>


            <Signup
                openModal={openModal}
                onClose={() => setOpenModal(false)}
            />

            <ResetPasswordModal
                openResetModal={openResetModal}
                closeModal={() => setResetModal(false)}
            />
        </div>
    )
}
