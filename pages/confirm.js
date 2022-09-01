import Map from "./components/Map";
import Ridecontainer from "./components/Ridecontainer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Confirm(props) {

    const router = useRouter();
    const { pickup, drop } = router.query;

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    function getPickupCoordinater(pickup) {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZGhhYmxpeWFtZWV0IiwiYSI6ImNsNzd5aXN2NzA0amgzcnM2MzFnd3lxaWkifQ.XJ4SsJE-UnvbUDcKViMefA',
                limit: 1
            }))
            .then(res => res.json())
            .then(data => setPickupCoordinates(data.features[0].center))
    }
    function getDropoffCoordinater(drop) {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${drop}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZGhhYmxpeWFtZWV0IiwiYSI6ImNsNzd5aXN2NzA0amgzcnM2MzFnd3lxaWkifQ.XJ4SsJE-UnvbUDcKViMefA',
                limit: 1
            }))
            .then(res => res.json())
            .then(data => setDropoffCoordinates(data.features[0].center))
    }

    useEffect(() => {
        getPickupCoordinater(pickup);
        getDropoffCoordinater(drop);


    }, [pickup, drop])



    return (
        <div className="h-screen flex flex-col flex-1 ">
            <div className=" flex-1 ">
                <div className="rounded-full absolute top-3 bg-white left-4 z-10 cursor-pointer">
                    <Link href="/search">

                        <Image alt="hdiuh" className="h-full object-contain" src="https://img.icons8.com/ios-filled/50/000000/left.png"></Image>

                    </Link>
                </div>

                <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates}></Map>
            </div>
            <div className="h-1/2 ">
                <Ridecontainer pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} ></Ridecontainer>
            </div>
        </div>
    )
}