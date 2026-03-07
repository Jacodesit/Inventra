import { LockIcon } from "lucide-react";
import { CircleX } from "../../../../components/animate-ui/icons/circle-x";

type pageProps = {
    closeModal: () => void;
}

export default function PasswordChangeHeading({closeModal}: pageProps) {
    const headline = 'Password';
    const subtext =  'Update your password. Keep your inventory safe.'

    return (
        <header className="px-4 py-3">
            <div className='flex justify-between'>
                <div className='inline-flex items-center bg-black p-4 rounded-lg'>
                    <LockIcon className="text-white"    />
                </div>

                <CircleX
                    animateOnHover
                    onClick={closeModal}
                    className={'cursor-pointer'}
                />
            </div>
            <h1 className="text-2xl font-bold mt-4">{headline}</h1>
            <p className="text-sm text-gray-500 mt-1">{subtext}</p>
        </header>
    )
}
