import { User, Lock } from 'lucide-react';
import type { Auth } from "@/types";


type pageProps = {
    showProfileModal: boolean;
    onClose: () => void
    auth: Auth
}

export default function UserProfileModal({showProfileModal, onClose, auth}:pageProps) {
    if(!showProfileModal) return null
    return (
        <main className=" inset-0 bg-opacity-50 relative">
            <div className="bg-[#ffffff] rounded w-30 flex flex-col absolute top-5 right-0 p-1 z-9999 shadow">
                <button
                    className='flex items-center justify-between text-sm py-3 px-1 transition-all duration-300 hover:bg-[#000c18] hover:text-white hover:rounded cursor-pointer'
                >
                    Profile
                    <User size={15}/>
                </button>
                <button
                    className='flex items-center justify-between text-sm py-3 px-1 transition-all duration-300 hover:bg-[#000c18] hover:text-white hover:rounded cursor-pointer'
                >
                    Password
                    <Lock size={15}/>
                </button>
            </div>
        </main>
    )
}
