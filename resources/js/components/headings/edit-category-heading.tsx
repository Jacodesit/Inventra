import { BookUser } from 'lucide-react';
import { CircleX } from "../../../../components/animate-ui/icons/circle-x";

type pageProps = {
    onClose: () => void;
}

export default function EditCategoryHeading({onClose}: pageProps) {
    const headline = 'Edit Category'
    const subtext = 'Edit your category'
    return (
        <header className="px-4 py-3">
            <div className='flex justify-between'>
                <div className='inline-flex items-center bg-black p-4 rounded-lg'>
                    <BookUser className='text-white h-6'/>
                </div>

                <CircleX
                    animateOnHover
                    onClick={onClose}
                    className={'cursor-pointer'}
                />
            </div>
            <h1 className="text-2xl font-bold mt-4">{headline}</h1>
            <p className="text-sm text-gray-500 mt-1 font-normal">{subtext}</p>
        </header>
    )
}
