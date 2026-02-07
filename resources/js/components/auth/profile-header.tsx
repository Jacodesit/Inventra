import { usePage } from "@inertiajs/react";

import { CircleUserRound } from 'lucide-react';

import type { Auth } from "@/types"

type pageProps = {
    auth: Auth
}

export default function ProfileHeader() {
    const { auth }  = usePage<pageProps>().props;
    return (
        <div className="flex items-center gap-2 transion-all duration-300 cursor-pointer">
            <div>
                <CircleUserRound size={35} strokeWidth={1} />
            </div>
            <div>
                <p className="text-sm font-medium">{auth.user.name}</p>
                <p className="text-xs text-gray-500">{auth.user.email}</p>
            </div>
        </div>
    )
}
