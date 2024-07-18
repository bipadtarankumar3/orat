import { localAxios, privateAxios } from "./Axios";


export const homeProducts = async (data) => {
    const response = await localAxios.get('home_products',data).then((response) => response.data);
    return response;
}