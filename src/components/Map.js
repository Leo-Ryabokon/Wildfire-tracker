import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({center, zoom, eventData}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                                   onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyBUIfNUvwo7DasXlVDxW64GgiTRzQZBfGk'}} defaultCenter={center}
                            defaultZoom={zoom}>
                {markers}
            </GoogleMapReact>
            {
                locationInfo && <LocationInfoBox info={locationInfo} />
            }
        </div>
    );
};
Map.defaultProps = {
    center: {
        lat: 47.233334,
        lng: 39.700001
    },
    zoom: 6
}

export default Map;