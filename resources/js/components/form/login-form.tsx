import { Mail } from 'lucide-react';
import { FileLock } from 'lucide-react';

export default function LoginForm() {
    return (
        <div>
            <form className='mb-5'>
                <div>
                    <label
                        htmlFor="email"
                        className='text-sm font-medium'
                    >
                            Email
                    </label>
                    <div className="flex gap-2 items-center border rounded">
                        <div className='p-3'>
                            <Mail />
                        </div>

                        <input
                            type="email"
                            placeholder='johndoe@gmail.com'
                            className='w-full p-3'
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
                    <div className="flex gap-2 items-center border rounded">
                        <div className='p-3'>
                            <FileLock />
                        </div>

                        <input
                            type="email"
                            placeholder='johndoe@gmail.com'
                            className='w-full p-3'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
