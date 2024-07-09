import { localAxios, privateAxios } from "./Axios";

export const userSignUp = (user) => {
    return localAxios.post('register').then((response)=>response.json());
}
// export const userLogin = (loginDetails) => {
//     return localAxios.post('login',loginDetails).then((response)=>response.data);
// }

export const loginUser = async (userData) => {
    const response = await localAxios.post('/login', userData);
    return response.data;
};

export const userOtpLogin = (loginDetails) => {
    return localAxios.post('otp_verify',loginDetails).then((response)=>response.data);
}

export const userUpdate = (updateData) => {

    console.log(updateData);

    return privateAxios.post('profile_update',updateData).then((response)=>response.data);
}

export const forgotPAssword = (updateData) => {

    console.log(updateData);

    return localAxios.post('forgot_password',updateData).then((response)=>response.data);
}

export const confirmUserPAssword = (updateData) => {

    console.log(updateData);

    return localAxios.post('confirm_password',updateData).then((response)=>response.data);
}


export const changeUserPassword = (updateData) => {

    console.log(updateData);

    return privateAxios.post('change_password',updateData).then((response)=>response.data);
}



