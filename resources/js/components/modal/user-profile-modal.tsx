import { User, Lock } from 'lucide-react';

type pageProps = {
    showProfileModal: boolean;
    openProfile: () => void
    openPasswordModal: () => void
    onClose: () => void
}

export default function UserProfileModal({showProfileModal, onClose, openProfile, openPasswordModal}:pageProps) {
    if(!showProfileModal) return null
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-opacity-50 "
        >
            <div className='relative inset-0'>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#ffffff] rounded w-40 flex flex-col absolute top-20 right-6 p-1 z-9999 shadow"
                >
                    <button
                        onClick={openProfile}
                        className='flex items-center justify-between text-sm py-3 px-1 transition-all duration-300 hover:bg-[#000c18] hover:text-white hover:rounded cursor-pointer'
                    >
                        Profile
                        <User size={15}/>
                    </button>
                    <button
                        onClick={openPasswordModal}
                        className='flex items-center justify-between text-sm py-3 px-1 transition-all duration-300 hover:bg-[#000c18] hover:text-white hover:rounded cursor-pointer'
                    >
                        Password
                        <Lock size={15}/>
                    </button>
                </div>
            </div>

        </div>
    )
}
