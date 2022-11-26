import { Navbar, Footer, Container, } from "@components";
import Link from "next/link";

const SignUp: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <div className="h-screen">
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center ">
                            Sign Up
                        </h1>
                        <form className="mt-6">
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="fullName"
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 required"
                                />
                                <label
                                    className="block text-sm pt-2 font-semibold text-gray-800"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <label
                                    className="block pt-2 text-sm font-semibold text-gray-800"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="confirmPassword"
                                    required
                                    className="block w-full  px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-6">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                    SignUp
                                </button>
                            </div>
                        </form>

                        <p className="mt-8  text-center ">

                            <span className="text-sm text-gray-700">Already have an account?</span>
                            <span className="text-sm px-1 text-purple-600 hover:underline">
                                <Link
                                    href="/login"
                                    className=""
                                >
                                    Login
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </Container>
    )
}
export default SignUp;