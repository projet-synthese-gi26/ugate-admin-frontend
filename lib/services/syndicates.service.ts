import { apiPost } from './api.client';

export async function createSyndicate(formData: FormData) {
    return apiPost('/syndicates', formData);
}