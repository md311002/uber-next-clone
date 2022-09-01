import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Search() {

    const [enterLocation, setEnterLocation] = useState();
    const [whereTo, setWhereTo] = useState();


    return (
        <div className="bg-gray-200 h-screen ">
            <Link href={"/"}>
                <div className="px-4 bg-white" >
                    <Image alt="coc" src="https://img.icons8.com/ios-filled/50/000000/left.png"></Image>
                </div>
            </Link>
            <div className="bg-white flex items-center mb-2 ">
                <div className="mr-2 ml-4 flex flex-col items-center">
                    <Image alt="coc" className="h-2.5" src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"></Image>
                    <Image alt="coc" className="h-10" src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"></Image>
                    <Image alt="coc" className="h-3" src=" https://img.icons8.com/windows/50/000000/square-full.png"></Image>
                </div>
                <div className=" flex flex-col flex-1 px-4">
                    <input
                        onChange={(event) => setEnterLocation(event.target.value)}
                        value={enterLocation}
                        className="bg-gray-200 h-10 my-2 rounded p-2 outline-none border-none" placeholder="Enter Pickup Location"></input>
                    <input
                        onChange={(event) => setWhereTo(event.target.value)}
                        value={whereTo}
                        className="bg-gray-200 h-10 my-2 rounded p-2 outline-none border-none" placeholder="Where To?"></input>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 ml-4 mr-4">
                    <Image alt="coc" src="https://img.icons8.com/ios/50/000000/plus-math.png"></Image>
                </div>
            </div>
            <div className="flex items-center bg-white px-4 py-2">
                <Image alt="coc" className="w-10 h-10 bg-gray-400 p-2 rounded-full mr-2" src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"></Image>
                <h2>Saved Places</h2>
            </div>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickup: enterLocation,
                    drop: whereTo
                }
            }}>
                <div className=" ml-2 mr-2 mt-2 p-2  text-center bg-black cursor-pointer rounded text-white text-2xl py-3 px-4">
                    Confirm Location

                </div>
            </Link>
        </div>

    )
} 