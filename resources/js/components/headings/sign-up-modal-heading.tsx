import { UserPlus } from 'lucide-react';
import { CircleX } from "../../../../components/animate-ui/icons/circle-x";

type pageProps = {
    onClose: () => void;
}

export default function SignUpHeading({onClose}: pageProps) {
    return (
        <header className="px-4 py-3">
            <div className='flex justify-between'>
                <div className='inline-flex items-center bg-black p-4 rounded-lg'>
                    <UserPlus className='text-white h-6'/>
                </div>

                <CircleX
                    animateOnHover
                    onClick={onClose}
                    className={'cursor-pointer'}
                />
            </div>
            <h1 className="text-2xl font-bold mt-4">Create your account</h1>
            <p className="text-sm text-gray-500 mt-1">Sign up to get started managing your inventory.</p>
        </header>
    )
}
