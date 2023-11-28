import getAxiosInstance from './axiosProvider';

export async function userSignIn({ email, password }) {
    let axiosInstance = getAxiosInstance();
    let response = await axiosInstance.post('/signin',
        {
            email: email,
            password: password
        }
    );
    return response;
}

export async function userSignUp(formData) {
    let axiosInstance = getAxiosInstance();

    let response = await axiosInstance.post('/signup', formData
    );
    return response;
}

export async function updateMyProfile(token, formData) {
    let axiosInstance = getAxiosInstance(token);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    let response = await axiosInstance.put("/me", formData, config);

    return response;
}

export async function getMyProfile(token) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.get('/me')
    return response;
}

export async function userLogOut(token) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.get('/signout')
    return response;
}