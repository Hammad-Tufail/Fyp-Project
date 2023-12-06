import getAxiosInstance from './axiosProvider';

export async function viewUsers(token) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.get('/users')
    return response;
}

export async function editUser(token, userId, name, number) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.put(`/users/${userId}`)
    return response;
}

export async function deleteUser(token, userId) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.delete(`/users/${userId}`)
    return response;
}