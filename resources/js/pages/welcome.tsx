import {Toaster } from "react-hot-toast";
import ImageSide from "@/components/landing/image-side"
import LoginSide from "@/components/landing/login-side"

export default function Landing() {
    return (
        <main className="flex h-screen">
            <ImageSide />
            <Toaster position="top-right" />
            <LoginSide />
        </main>
    )
}
