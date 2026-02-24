import AddCategoryForm from "../form/add-category";
import AddCategoryHeading from "../headings/add-category-heading";

type pageProps = {
    openModal: boolean
    onClose: () => void
}

export default function AddCategoriesModal({openModal, onClose}:pageProps) {
    if(!openModal) return null;
    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5">
                <AddCategoryHeading onClose={onClose}/>
                <AddCategoryForm onClose={onClose}/>
            </div>
        </main>
    )
}
