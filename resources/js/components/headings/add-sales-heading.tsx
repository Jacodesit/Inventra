import { ShoppingCart } from 'lucide-react';
import { CircleX } from "../../../../components/animate-ui/icons/circle-x";

type pageProps = {
    onClose: () => void;
}

export default function AddSalesHeading({onClose}: pageProps) {
    const headline = 'Add New Sale';
    const subtext =  'Record a product sale. Enter the item, quantity, and price to update your sales records instantly.'

    return (
        <header className="px-4 py-3">
            <div className='flex justify-between'>
                <div className='inline-flex items-center bg-black p-4 rounded-lg'>
                    <ShoppingCart className='text-white h-6' />
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
