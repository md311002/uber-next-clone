import { useRouter } from "next/router"
import { useEffect } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import Image from "next/image";

export default function Login() {

    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push("/")
            }
        }
        )

    }), []
    return (
        <div className="flex flex-col h-screen bg-gray-200  p-4">
            <Image alt="cjdoo" src="https://i.ibb.co/n6LWQM4/Post.png " className="h-20 w-20 object-contain self-start"></Image>
            <Image alt="cjdoo" src=" https://i.ibb.co/CsV9RYZ/login-image.png" className="object-contain w-full"></Image>
            <p className="text-5xl pt-4 text-gray-500">Log in to access your account</p>
            <button onClick={() => signInWithPopup(auth, proviImage)} className="bg-black text-white text-center w-full py-4 mt-8 self-center">Sign in with Google</button>
        </div>
    )
}