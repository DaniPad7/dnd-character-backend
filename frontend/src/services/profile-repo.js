import {apiClient} from "../remote/api-client";

export async function getAllProfiles() {
    let response = await apiClient.get(`/profile/all`);
    return await response.data;
}