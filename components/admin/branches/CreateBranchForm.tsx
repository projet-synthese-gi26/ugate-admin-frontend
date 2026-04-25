"use client";

import { useState } from "react";
import MapPicker, { LatLng } from "@/components/maps/MapPicker";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface Props {
    syndicatId: string;
    onSuccess?: () => void;
}

export default function CreateBranchForm({ syndicatId, onSuccess }: Props) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");
    const [banner, setBanner] = useState<File | null>(null);
    const [position, setPosition] = useState<LatLng | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        if (contact) formData.append("contact", contact);
        if (banner) formData.append("banner", banner);

        if (position) {
            formData.append("latitude", position.lat.toString());
            formData.append("longitude", position.lng.toString());
        }

        await fetch(`/api/admin/syndicates/${syndicatId}/branches`, {
            method: "POST",
            body: formData,
        });

        setLoading(false);
        onSuccess?.();
    };

    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-8">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Créer une antenne
                </h2>
                <p className="text-slate-500 mt-1">
                    Renseignez les informations et sélectionnez la position sur la carte.
                </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label="Nom de l’antenne"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <Input
                    label="Localisation"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />

                <Input
                    label="Contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Bannière
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setBanner(e.target.files?.[0] ?? null)}
                        className="block w-full text-sm text-slate-600"
                    />
                </div>
            </div>

            {/* Map */}
            <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                    Position de l’antenne
                </h3>
                <MapPicker value={position ?? undefined} onChange={setPosition} />
                <p className="text-xs text-slate-500 mt-2">
                    Cliquez sur la carte pour définir la position exacte.
                </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end">
                <Button onClick={handleSubmit} isLoading={loading}>
                    Créer l’antenne
                </Button>
            </div>
        </div>
    );
}