// import { PackagePlus } from 'lucide-react';
import { CircleX } from "../../../../components/animate-ui/icons/circle-x";

type pageProps = {
    onClose: () => void;
}

export default function AddCategoryHeading({onClose}: pageProps) {
    const headline = 'Add New Category';
    const subtext =  'Create a category to keep your inventory clean and sorted.'

    return (
        <header className="px-4 py-3">
            <div className='flex justify-between'>
                <div className='inline-flex items-center bg-black p-4 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layers-plus-icon lucide-layers-plus"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z"/><path d="M16 17h6"/><path d="M19 14v6"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962"/></svg>
                </div>

                <CircleX
                    animateOnHover
                    onClick={onClose}
                    className={'cursor-pointer'}
                />
            </div>
            <h1 className="text-2xl font-bold mt-4">{headline}</h1>
            <p className="text-sm text-gray-500 mt-1">{subtext}</p>
        </header>
    )
}
