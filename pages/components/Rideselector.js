import { carList } from "./data/cardata"
import React, { useEffect, useState } from "react"
import Image from "next/image";


export default function RideSelector(props) {
    const [rideDuration, setRideDuration] = useState(0);

    const { pickupCoordinates, dropoffCoordinates } = props;




    useEffect(() => {


        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZGhhYmxpeWFtZWV0IiwiYSI6ImNsNzd5aXN2NzA0amgzcnM2MzFnd3lxaWkifQ.XJ4SsJE-UnvbUDcKViMefA`)
            .then(res => res.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 100)
            })



    }, [pickupCoordinates, dropoffCoordinates])
    return (
        <div className="flex-1 flex flex-col ">

            <div >

                <div className="flex p-4 items-center " >
                    <Image alt="hii" className="h-14 mr-2" src={carList[0].imgUrl}></Image>
                    <div className="flex-1 text-left">
                        <h2>{carList[0].service}</h2>
                        <p className="text-blue-500 text-xs">{(rideDuration.toFixed(0) - 1) + " minutes"}</p>
                    </div>
                    <div>{'$' + (rideDuration * carList[0].multiplier).toFixed(2)}</div>
                </div>

            </div>
            <div >

                <div className="flex p-4 items-center " >
                    <Image alt="hiii" className="h-14 mr-2" src='https://i.ibb.co/YDYMKny/uberxl.png'></Image>
                    <div className="flex-1 text-left">
                        <h2>UberXL</h2>
                        <p className="text-blue-500 text-xs">{(rideDuration.toFixed(0) - 1) + " minutes"}</p>
                    </div>
                    <div>{'$' + (rideDuration * carList[1].multiplier).toFixed(2)}</div>
                </div>

            </div>
            <div >

                <div className="flex p-4 items-center " >
                    <Image alt="hihi" className="h-14 mr-2" src='https://i.ibb.co/Xx4G91m/uberblack.png'></Image>
                    <div className="flex-1 text-left">
                        <h2>Black</h2>
                        <p className="text-blue-500 text-xs">{(rideDuration.toFixed(0) - 1) + " minutes"}</p>
                    </div>
                    <div>{'$' + (rideDuration * carList[2].multiplier).toFixed(2)}</div>
                </div>

            </div>
            <div >

                <div className="flex p-4 items-center " >
                    <Image alt="ffd" className="h-14 mr-2" src='https://i.ibb.co/cyvcpfF/uberx.png'></Image>
                    <div className="flex-1 text-left">
                        <h2>Comfort</h2>
                        <p className="text-blue-500 text-xs">{(rideDuration.toFixed(0) - 1) + " minutes"}</p>
                    </div>
                    <div>{'$' + (rideDuration * carList[3].multiplier).toFixed(2)}</div>
                </div>

            </div>
            <div >

                <div className="flex p-4 items-center " >
                    <Image alt="fdfd" className="h-14 mr-2" src='https://i.ibb.co/1nStPWT/uberblacksuv.png'></Image>
                    <div className="flex-1 text-left">
                        <h2>Black SUV</h2>
                        <p className="text-blue-500 text-xs">{(rideDuration.toFixed(0) - 1) + " minutes"}</p>
                    </div>
                    <div>{'$' + (rideDuration * carList[4].multiplier).toFixed(2)}</div>
                </div>

            </div>
        </div>
    )
}