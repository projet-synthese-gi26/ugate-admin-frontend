"use client";

import { useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

export type BranchCoordinates = { latitude: number; longitude: number };

interface Props {
    value: BranchCoordinates | null;
    onChange: (coords: BranchCoordinates) => void;
    heightClassName?: string;
    zoom?: number;
}

/**
 * Fix icons Leaflet (sinon marker cassé en Next build).
 */
const markerIcon = L.icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize:[25, 41],
    iconAnchor: [12, 41],
    shadowSize:[41, 41],
});

const DEFAULT_CENTER: BranchCoordinates = { latitude: 4.0511, longitude: 9.7679 };

function ClickHandler({ onChange }: { onChange: Props["onChange"] }) {
    useMapEvents({
        click(e) {
            onChange({
                latitude: Number(e.latlng.lat.toFixed(6)),
                longitude: Number(e.latlng.lng.toFixed(6)),
            });
        },
    });
    return null;
}

export default function LeafletMapPicker({
                                             value,
                                             onChange,
                                             heightClassName = "h-80",
                                             zoom = 13,
                                         }: Props) {
    const center = useMemo<[number, number]>(() => {
        if (value) return[value.latitude, value.longitude];
        return [DEFAULT_CENTER.latitude, DEFAULT_CENTER.longitude];
    }, [value]);

    return (
        // ✅ AJOUT IMPORTANT : relative z-0 pour forcer la carte à rester contenue et ne pas passer par-dessus les modales
        <div className={`relative z-0 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 ${heightClassName}`}>
            {/* L'ajout de !z-0 sur la map container force la hiérarchie */}
            <MapContainer center={center} zoom={zoom} scrollWheelZoom className="h-full w-full !z-0">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickHandler onChange={onChange} />
                {value && (
                    <Marker
                        position={[value.latitude, value.longitude]}
                        icon={markerIcon}
                    />
                )}
            </MapContainer>
        </div>
    );
}