import getAxiosInstance from './axiosProvider';


export async function adminSignIn({ email, password }) {
    let axiosInstance = getAxiosInstance();
    let response = await axiosInstance.post('/signin',
        {
            email: email,
            password: password
        }
    );
    return response;
}

export async function adminLogOut(token) {
    let axiosInstance = getAxiosInstance(token);
    let response = await axiosInstance.get('/signout')
    return response;
}