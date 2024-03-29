'use client';
import { useEffect } from 'react';
import { GeoSearchControlOptions, MarkerType } from '@/lib/types/types';
import { useMap } from 'react-leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import { useMapMarkers } from '@/lib/zustand/store';

// const MapSearch = ({ setMarkers }: { setMarkers: React.Dispatch<React.SetStateAction<MarkerType[]>> }) => {
const MapSearch = () => {
    const provider = new OpenStreetMapProvider();
    const searchControlOptions: GeoSearchControlOptions = {
        provider: provider,
        style: 'bar',
        showMarker: true,
        showPopup: true,
        autoClose: true,
    };

    // @ts-ignore
    const searchControl = new GeoSearchControl(searchControlOptions);

    const map = useMap();

    // @ts-ignore
    useEffect(() => {
        map.addControl(searchControl);
        map.addEventListener('dblclick', (event) => {
            const { lat, lng } = event.latlng;
            useMapMarkers.setState({ markers: { lat, lng } });
        });

        return () => {
            map.removeControl(searchControl);
            map.removeEventListener('dblclick');
        };
    }, []);

    return null;
};

export default MapSearch;
