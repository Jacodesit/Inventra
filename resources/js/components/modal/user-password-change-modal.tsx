import type { Auth } from "@/types"
import PasswordForm from "../form/password-form"
import PasswordChangeHeading from "../headings/user-change-password-heading"

type pageProps = {
    openPasswordModal: boolean
    closeModal: () => void
    auth: Auth
}

export default function PasswordModal({openPasswordModal, closeModal}:pageProps) {
    if(!openPasswordModal) return null
    return (
        <main
            // onClick={closeModal}
            className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-9999"
        >
            <div
                className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5 "
            >
                <PasswordChangeHeading closeModal={closeModal} />
                <PasswordForm closeModal={closeModal}/>
            </div>
        </main>
    )
}
