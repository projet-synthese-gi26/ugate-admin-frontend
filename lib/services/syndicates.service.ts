import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

export async function createSyndicate(formData: FormData) {
    const token = getAccessToken();

    try {
        const response = await fetch(`${API_URL}/syndicates`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                // Note: Ne pas mettre 'Content-Type': 'multipart/form-data' manuellement
                // le navigateur le fait automatiquement avec le bon boundary pour FormData
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erreur ${response.status}: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur création syndicat:', error);
        throw error;
    }
}