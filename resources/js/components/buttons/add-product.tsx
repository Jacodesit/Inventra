type pageProps = {
    onClick: () => void
}
export default function AddProduct({onClick}:pageProps) {
    return (
        <div className='flex justify-end'>
            <button
                onClick={onClick}
                className='text-sm border p-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-sidebar-color hover:text-white'
            >
                Add Product
            </button>
        </div>
    )
}
