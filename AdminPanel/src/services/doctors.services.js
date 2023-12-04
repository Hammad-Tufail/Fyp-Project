import getAxiosInstance from './axiosProvider';

export async function viewDoctors(token) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.get('/doctors')
    return response;
}

export async function editDoctor(token) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.patch(`/doctors/${userId}`)
    return response;
}

export async function deleteDoctor(token, userId) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.delete(`doctors/${userId}`)
    return response;
}