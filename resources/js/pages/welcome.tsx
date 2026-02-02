import ImageSide from "@/components/landing/image-side"
import LoginSide from "@/components/landing/login-side"

export default function Landing() {
    return (
        <main className="flex h-screen">
            <ImageSide />
            <LoginSide />
        </main>
    )
}
