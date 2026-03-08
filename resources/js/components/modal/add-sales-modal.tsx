import type { Product } from "@/types/inventory";
import SalesForm from "../form/add-sales";
import AddSalesHeading from "../headings/add-sales-heading";

type pageProps = {
    openSalesModal: boolean
    onClose: () => void
    products: Product[]
}

export default function SalesModal({openSalesModal, onClose, products}:pageProps) {
    if(!openSalesModal) return null
    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5 ">
                <AddSalesHeading onClose={onClose} />
                <SalesForm products={products} />
            </div>
        </main>
    )
}
