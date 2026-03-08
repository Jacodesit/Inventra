import { router } from "@inertiajs/react"
import toast from "react-hot-toast";
import { logout } from "@/routes";
import { CircleX } from "../../../../components/animate-ui/icons/circle-x";

type pageProps = {
    openDialog: boolean;
    onClose: () => void;
}

export default function LogoutDialog({openDialog, onClose}:pageProps) {
    if(!openDialog) return null

    const handleLogout = () => {
        router.visit(logout(), {
            onSuccess: () => {
                toast.success('Logged out successfully!');
            }
        });
    }
    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-slate-100 rounded-lg max-w-md w-full flex flex-col relative p-8">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-end">
                        <CircleX
                            animateOnHover
                            onClick={onClose}
                            className={'cursor-pointer text-black'}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-10">
                        <div className="flex flex-col items-center">
                            <img
                                src='/SVG/logout.svg'
                                alt="Logout SVG"
                                className="h-35 mb-5"
                            />
                            <p className="text-black text-center">Are you sure you want to logout?</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={onClose}
                                className="border px-5 py-2 bg-gray-400 text-white rounded text-sm cursor-pointer transition-all duration-300 hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                className="border px-5 py-2 text-black rounded text-sm cursor-pointer transition-all duration-300 hover:bg-sidebar-color hover:text-white"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
