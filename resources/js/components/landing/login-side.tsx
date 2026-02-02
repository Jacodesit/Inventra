import LoginForm from "../form/login-form"

export default function LoginSide() {
    const headline = 'Welcome Back!'
    const subtext = 'Log in to continue managing your inventory.'

    return (
        <div className="w-full lg:w-1/3 p-5 h-screen flex items-center">
            <div className="w-full flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold">{headline}</h1>
                    <p className="text-sm text-gray-500">{subtext}</p>
                </div>
                <LoginForm />
            </div>

        </div>
    )
}
