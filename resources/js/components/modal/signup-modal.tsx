import SignUpForm from "../form/sign-up-form";
import SignUpHeading from "../headings/sign-up-modal-heading";

type Pageprops = {
    openModal: boolean;
    onClose: () => void;
}

export default function Signup({ openModal, onClose}:Pageprops) {
    if(!openModal) return null;

    return (
        <main className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full flex flex-col relative px-8 py-5">
                <SignUpHeading onClose={onClose}/>
                <SignUpForm />
            </div>
        </main>
    )
}
