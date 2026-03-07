import { usePage } from "@inertiajs/react";
import { CircleUserRound } from 'lucide-react';
import { useState,  } from "react";

import type { Auth } from "@/types";
import UserModal from "../modal/profile-modal";
import PasswordModal from "../modal/user-password-change-modal";
import UserProfileModal from "../modal/user-profile-modal";

type pageProps = {
    auth: Auth
}

export default function ProfileHeader() {
    const { auth }  = usePage<pageProps>().props;

    const [showProfileModal, setShowProfileModal] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openPasswordModal, setOpenPasswordModal] = useState(false);

    return (
        <div>
            <div
                onClick={() => setShowProfileModal(true)}
                className="flex items-center gap-2 transion-all duration-300 cursor-pointer"
            >
                <div>
                    <CircleUserRound size={35} strokeWidth={1} />
                </div>
                <div>
                    <p className="text-sm font-medium">{auth.user?.name}</p>
                    <p className="text-xs text-gray-500">{auth.user?.email}</p>
                </div>
            </div>

            <UserProfileModal
                showProfileModal={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                openProfile={() => {setOpenProfile(true); setShowProfileModal(false)}}
                openPasswordModal={() => {setOpenPasswordModal(true); setShowProfileModal(false)}}
            />

            <UserModal
                auth={auth}
                openProfile={openProfile}
                closeModal={() => setOpenProfile(false)}
            />

            <PasswordModal
                auth={auth}
                openPasswordModal={openPasswordModal}
                closeModal={() => setOpenPasswordModal(false)}
            />
        </div>
    )
}
