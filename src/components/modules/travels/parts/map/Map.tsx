'use client';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { JsonValue } from '@prisma/client/runtime/library';
import { MarkerType } from '@/lib/types/types';
import { useLayoutEffect } from 'react';

function Map({ mapData, popUp }: { mapData: JsonValue; popUp: string }) {
    const markers = mapData as MarkerType as { lat: number; lng: number };

    return (
        <MapContainer
            className='h-[12rem] w-full rounded-md md:h-[18rem]'
            center={[markers.lat, markers.lng]}
            zoom={13}
            doubleClickZoom={false}
        >
            <TileLayer
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.jpeg'
                // attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
            <SetMapTo lat={markers.lat} lng={markers.lng} />
            <Marker
                position={[markers.lat, markers.lng]}
                icon={
                    new Icon({
                        iconUrl:
                            'https://cdn-icons-png.flaticon.com/512/149/149059.png',
                        iconSize: [38, 38],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                    })
                }
            >
                <Popup>
                    <h2>{popUp}</h2>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

function SetMapTo({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap();

    useLayoutEffect(() => {
        map.setView({ lat: lat, lng: lng });
    }, [lat, lng]);

    return null;
}

export default Map;
