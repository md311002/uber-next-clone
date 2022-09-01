
import RideSelector from "./Rideselector";

export default function Ridecontainer(props) {
    const { pickupCoordinates, dropoffCoordinates } = props;

    return (
        <div className="text-center flex flex-col h-full flex-1 overflow-y-scroll">
            <div className="flex-1 overflow-y-scroll">
                <p className="text-xs border-b text-gray-500">Choose a ride, or swipe up for more </p>

                <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates}></RideSelector>


            </div>
            <div className="bg-black ml-2 mr-2 p-2 text-white mb-2 ">
                <button className="items-center h-10 text-2xl">Confirm Ride</button>
            </div>
        </div>
    )




}