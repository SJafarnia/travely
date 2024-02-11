import { JsonValue } from '@prisma/client/runtime/library';

export type MarkerType = {
    lat: undefined | number;
    lng: undefined | number;
};

export type ProfileFormType = {
    username: string;
    location: string;
    image: File;
};

export type FormValues = {
    title: string;
    location: string;
    description: string;
    mapData: {
        lat: undefined | number;
        lng: undefined | number;
    };
    tips: {};
    images: never[];
};

export type FormValuesToSubmit = {
    title: string;
    location: string;
    description: string;
    mapData: MarkerType;
    tips: {};
    images?: [publicId: string, link: string][];
};

export interface GeoSearchControlOptions {
    provider: any; // Replace 'any' with the specific provider type if available
    style?: 'bar' | 'button';
    showMarker?: boolean;
    showPopup?: boolean;
    autoClose?: boolean;
}

export type travelDataType = {
    title: string;
    location: string;
    author: {
        email: string;
    };
    parts: ({
        imageGallery: {
            id: string;
            link: string;
            publicId: string;
            partId: string | null;
        }[];
    } & {
        id: string;
        title: string;
        description: string | null;
        mapData: JsonValue;
        recommendations: JsonValue;
        date: Date;
        travelId: string;
    })[];
} | null;
