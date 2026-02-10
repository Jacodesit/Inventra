import { useState } from "react";

import { LogOut } from '../../../../components/animate-ui/icons/log-out';
import LogoutDialog from "../dialog/logout-dialog";

type pageProps = {
    openSidebar: boolean
}

export default function Logout({openSidebar}:pageProps) {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div>
            <div className="">
                <hr className="pt-3 opacity-10" />
                <button
                    onClick={() => setOpenDialog(true)}
                    className="cursor-pointer px-8 py-4 w-full flex items-center justify-start gap-1 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                >
                    {!openSidebar ? (
                        <div className="flex items-center gap-1">
                            <LogOut animateOnHover size={18} />
                            <span>Logout</span>
                        </div>
                    ) : (
                        <div title="Logout">
                            <LogOut animateOnHover size={18} />
                        </div>
                    )}
                </button>
            </div>
            <LogoutDialog
                openDialog={openDialog}
                onClose={() => setOpenDialog(false)}
            />
        </div>
    )
}
