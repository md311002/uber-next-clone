
import { useEffect, useState } from "react";
import Map from "./components/Map";
import { auth, provider } from "../firebase";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          profile: user.photoURL
        })
      } else {
        setUser(null)
        router.push('/login')

      }
    })
  })


  return (

    <div className="flex flex-col h-screen  ">
      <div className="flex-1 "><Map></Map></div>
      <div className=" flex-1 p-4  h-full">
        <div className="flex justify-between items-center">
          <Image alt="jih" width={160} height={160} src=" https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></Image>
          <div className="flex">
            <p className="py-4">{user && user.name}</p>
            <Image alt="profile" onClick={() => signOut(auth)} width={50} height={50} src={user && user.profile} className="h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer ml-4"></Image>
          </div>
        </div>
        <div className="flex">
          <Link href="/search">
            <div className="flex-1 m-1 h-32 text-xl hover:scale-105 transform transition items-center flex flex-col justify-between rounded-lg p-3 bg-gray-300">
              <Image alt="hcid" className="h-4/5" src="https://i.ibb.co/cyvcpfF/uberx.png"></Image>
              <p>Ride</p>
            </div>
          </Link>
          <div className="flex-1 m-1 h-32 text-xl hover:scale-105 transform transition items-center flex flex-col justify-between rounded-lg p-3 bg-gray-300">
            <Image alt="kcImage" className="h-4/5" src="https://i.ibb.co/n776JLm/bike.png"></Image>
            <p>Wheels</p>
          </div>
          <div className="flex-1 m-1 h-32 text-xl hover:scale-105 transform transition items-center flex flex-col justify-between rounded-lg p-3 bg-gray-300">
            <Image alt="chdoh" className="h-4/5" src="https://i.ibb.co/5RjchBg/uberschedule.png"></Image>
            <p>Reserve</p>
          </div>
        </div>
        <Link href='/search'>
          <div className="h-20 bg-gray-200 w-full rounded-lg p-4 items-center text-2xl flex mt-8">
            Where to?
          </div>
        </Link>
      </div>


    </div>
  )
}