import {apiClient} from '../remote/api-client';


export default async function getTestData() {
    let response = await apiClient.get('/test/ping');
    return await response.data;
}