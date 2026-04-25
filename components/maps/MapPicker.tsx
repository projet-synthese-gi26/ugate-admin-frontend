'use client';

import dynamic from 'next/dynamic';

export type BranchCoordinates = {
    latitude: number;
    longitude: number;
};

interface MapPickerProps {
    value: BranchCoordinates | null;
    onChange: (value: BranchCoordinates) => void;
    heightClassName?: string;
    zoom?: number;
}

const LeafletMapPicker = dynamic(() => import('./LeafletMapPicker'), {
    ssr: false,
    loading: () => (
        <div className="h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex items-center justify-center">
            <div className="text-center">
                <div className="mx-auto mb-3 h-10 w-10 rounded-full border-4 border-[#172554] border-t-transparent animate-spin" />
                <p className="text-sm font-medium text-slate-500">
                    Chargement de la carte…
                </p>
            </div>
        </div>
    ),
});

export default function MapPicker({
                                      value,
                                      onChange,
                                      heightClassName = 'h-72',
                                      zoom = 13,
                                  }: MapPickerProps) {
    return (
        <LeafletMapPicker
            value={value}
            onChange={onChange}
            heightClassName={heightClassName}
            zoom={zoom}
        />
    );
}
