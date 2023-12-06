import getAxiosInstance from './axiosProvider';


export async function doctorSignIn({ email, password }) {
    let axiosInstance = getAxiosInstance();
    let response = await axiosInstance.post('/signin',
        {
            email: email,
            password: password
        }
    );
    return response;
}

export async function doctorSignUp(formData) {
    let axiosInstance = getAxiosInstance();

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    let response = await axiosInstance.post('/signup', formData, config
    );
    return response;
}


export async function updateDoctorProfile(token, formData) {
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

export async function doctorLogOut(token) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.get('/signout')
    return response;
}