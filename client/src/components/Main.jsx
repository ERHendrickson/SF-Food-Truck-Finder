import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import {useLoadScript} from "@react-google-maps/api";
import Map from './Map'

function Main() {

    const {day, craving} = useParams();
    const [foodTruckData, setFoodTruckData] = useState({});

    useEffect(() => {
        axios.get(`https://data.sfgov.org/resource/jjew-r69b.geojson?&dayofweekstr=${day}`)
            .then((response) => {
                console.log(response.data.features)
                setFoodTruckData(response.data.features)
            })
            .catch((err) => {
                console.log("error in api fetch ", err)
            })
    }, [day])

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MY_GOOGLE_MAPS_API_KEY

    })
    
    if(!isLoaded) return<div>Loading...</div>;
    return (
        <div className='mapContainer'>
            <Map foodTruckData={foodTruckData} craving={craving}></Map>
        </div>
    )
}

export default Main