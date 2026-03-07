import type { Auth } from "@/types"
import UserInfoForm from "../form/user-info"
import ProfileHeading from "../headings/profile-heading"

type pageProps = {
    openProfile: boolean
    closeModal: () => void
    auth: Auth
}

export default function UserModal({openProfile, closeModal, auth}:pageProps) {
    if(!openProfile) return null
    return (
        <main
            // onClick={closeModal}
            className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-9999"
        >
            <div
                className="bg-slate-100 rounded-lg max-w-3xl w-full flex flex-col relative px-8 py-5 "
            >
                <ProfileHeading closeModal={closeModal} />
                <div className="py-5 px-4">
                    <div className="flex gap-2 ">
                        <div className="w-1/2 flex flex-col gap-2">
                            <h1 className="mb-1 bg-blue-100 px-3 border-l-4 border-l-blue-500 py-2 rounded text-xs">USER INFORMATION</h1>
                            <div>
                                <span className="text-xs text-gray-400">BUSINESS NAME</span>
                                <p className="text-base font-medium">{auth.user.business_title}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400">BUSINESS OWNER</span>
                                <p className="text-base font-medium">{auth.user.name}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400">EMAIL</span>
                                <p className="text-base font-medium">{auth.user.email}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400">ADDRESS</span>
                                <p className="text-base font-medium">{auth.user.address}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400">PHONE NUMBER</span>
                                <p className="text-base font-medium">{auth.user.phone_number}</p>
                            </div>
                        </div>
                        <UserInfoForm auth={auth} closeModal={closeModal} />
                    </div>
                </div>
            </div>
        </main>
    )
}
