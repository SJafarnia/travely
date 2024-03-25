'use client';
import { useEffect, useLayoutEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import MapSearch from '../../../travels/parts/map/MapSearch';
import { icon } from 'leaflet';
import MarkerIcon from '@/nodemodules/leaflet/dist/images/marker-icon.png';
import { useFormikContext } from 'formik';
import { useMapMarkers } from '@/lib/zustand/store';
import { MarkerType } from '@/lib/types/types';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';

function FormMap() {
    const { setFieldValue } = useFormikContext();

    const marker: MarkerType = useMapMarkers((state: any) => state.markers);

    useEffect(() => {
        setFieldValue('mapData', marker);
    }, [marker, setFieldValue]);

    return (
        <div className='mx-auto my-8 w-full rounded-md'>
            <MapContainer
                center={[51.505, -0.09] || marker}
                zoom={13}
                className='mx-auto h-[210px] rounded-md sm:h-[310px] lg:h-[450px]'
            >
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                {<MapSearch />}

                <SetMapTo lat={marker.lat} lng={marker.lng} />
                {marker['lat'] && marker['lng'] && (
                    <Marker
                        position={[marker.lat, marker.lng]}
                        icon={icon({
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                        })}
                    />
                )}
            </MapContainer>
        </div>
    );
}

function SetMapTo({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap();

    useLayoutEffect(() => {
        if (lat && lng) {
            map.setView({ lat: lat, lng: lng });
        }
    }, [lat, lng]);

    return null;
}

export default FormMap;
