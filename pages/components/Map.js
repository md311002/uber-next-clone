import { useEffect } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGhhYmxpeWFtZWV0IiwiYSI6ImNsNzd5aXN2NzA0amgzcnM2MzFnd3lxaWkifQ.XJ4SsJE-UnvbUDcKViMefA';

export default function Map(props) {

    const { pickupCoordinates, dropoffCoordinates } = props;


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', // style URL
            center: [23.0225, 72.5714], // starting position [lng, lat]
            zoom: 3 // starting zoom
        })

        if (pickupCoordinates) {
            addToMap(map, pickupCoordinates)
        }
        if (dropoffCoordinates) {
            addToMap(map, dropoffCoordinates)
        }
        if (pickupCoordinates && dropoffCoordinates) {
            map.fitBounds([
                pickupCoordinates, dropoffCoordinates
            ], {
                padding: 60
            }
            )
        }

    }, [pickupCoordinates, dropoffCoordinates])

    const addToMap = (map, coordinates) => {
        const marker2 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }


    return (
        <div id='map' className=' h-full' ></div>
    )
}