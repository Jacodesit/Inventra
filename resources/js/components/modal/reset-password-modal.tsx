import EmailForm from "../form/email-form";
import ResetModalHeading from "../headings/reset-modal-heading";

type pageProps = {
    openResetModal: boolean
    closeModal: () => void
}

export default function ResetPasswordModal({openResetModal,closeModal}:pageProps) {
    if(!openResetModal) return null
    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5 ">
                <ResetModalHeading closeModal={closeModal} />
                <EmailForm />
            </div>
        </main>
    )
}
