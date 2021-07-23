import {apiClient} from "../remote/api-client";

export async function getAllProfiles() {
    let response = await apiClient.get(`/profile/all`);
    return await response.data;
}

export async function postProfile(body) {
    let response = await apiClient.post(`/profile/create`, body)
    return await response.data;
}

export async function updateProfile(body) {
    let response = await apiClient.put(`/profile/update`, body);
    return await response.data;
}