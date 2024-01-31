'use client'
import { useState } from "react"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { icon } from "leaflet"
import MarkerIcon from "@nodemodules/leaflet/dist/images/marker-icon.png"
import MapSearch from "./MapSearch";
import { MarkerType } from "@/lib/types/types";
import 'leaflet/dist/leaflet.css'
import 'leaflet-geosearch/dist/geosearch.css';


function Map() {
    //remove state and fetch from data
    const [markers, setMarkers] = useState<MarkerType[]>([]);

    return (
        <MapContainer style={{
            height: '240px',
            width: '420px',
        }}
            center={[51.505, -0.09]} zoom={15} doubleClickZoom={false}

        >
            <TileLayer url='//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

            {markers && markers.map((marker, index) => (
                <Marker key={index} position={[marker.lat, marker.lng]}
                    icon={
                        icon({
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41]
                        })} />
            ))}
        </MapContainer>
    )
}

export default Map