'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
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
                center={[51.505, -0.09]}
                zoom={13}
                className='mx-auto'
                style={{
                    height: '450px',
                    width: '550px',
                    borderRadius: '0.5rem',
                }}
            >
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                {<MapSearch />}

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

export default FormMap;
