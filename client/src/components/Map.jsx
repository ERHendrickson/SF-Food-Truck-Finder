import React, {useState} from 'react';
import {GoogleMap, InfoWindow, Marker} from '@react-google-maps/api'
import mapStyles from '../mapStyles';

function Map(props) {
    const [selectedTruck, setSelectedTruck] = useState(null)
    
    let{foodTruckData, craving} = props

    let filteredTruckList = []
    //filters the data from the api call to whatever is inputed in the craving filter
    const cravings = () => {
        for (let i = 0; i < foodTruckData.length; i++) {
            if(foodTruckData[i].properties.optionaltext && craving){
                if(foodTruckData[i].properties.optionaltext.includes(craving)){
                    filteredTruckList.push(foodTruckData[i])
                }
            }else{
                filteredTruckList.push(foodTruckData[i])
            }
        }
    }
    cravings()
    console.log(filteredTruckList)
    return (
        <div className='border border-light border-4 rounded-2'>
            <GoogleMap 
            zoom={12.5} 
            center={{lat: 37.7549, lng: -122.4194}} 
            mapContainerClassName="map"
            options={{styles: mapStyles}}>
                
                {
                filteredTruckList.map((foodTruck, i) => {
                    return (<Marker key={i} 
                        position={{lat: parseFloat(foodTruck.properties.latitude), lng: parseFloat(foodTruck.properties.longitude)}}
                        onClick={() => {setSelectedTruck(foodTruck)}}
                        icon={{url: '/foodtruck.icon.png', scaledSize: new window.google.maps.Size(30, 30)}}/>)
                })
                }

                {selectedTruck && (
                <InfoWindow position={{ lat: parseFloat(selectedTruck.properties.latitude), lng: parseFloat(selectedTruck.properties.longitude) }}
                    onCloseClick={() => {setSelectedTruck(null)}}>
                    <div>
                        <p className='truckApplicant'>{selectedTruck.properties.applicant}</p>
                        <p>{selectedTruck.properties.starttime} - {selectedTruck.properties.endtime}</p>
                        <p>{selectedTruck.properties.location}</p>
                        <p>{selectedTruck.properties.optionaltext}</p>
                    </div>
                </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}

export default Map