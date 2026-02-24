export default function AddCategoryForm() {
    return (
        <div className='px-4 py-3'>
            <form className='flex flex-col gap-2'>
                <div>
                    <label htmlFor="name" className="font-medium text-xs">Name</label>
                    <input
                        type="text"
                        className="border w-full p-2.5 rounded text-xs"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="font-medium text-xs">Description</label>
                    <textarea
                        rows={5}
                        name="description"
                        id="description"
                        className="border w-full p-2.5 rounded resize-none text-xs"
                    ></textarea>
                </div>

                <div className="flex justify-end ">
                    <button className="px-6 py-2 border rounded transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-sm">
                        Add Category
                    </button>
                </div>
            </form>
        </div>
    )
}
