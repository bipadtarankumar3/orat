import { localAxios, privateAxios } from "./Axios";


export const homeProducts = async (data) => {
    const response = await localAxios.get('home_products',data).then((response) => response.data);
    return response;
}

export const products_list = async (params) => {
  try {
    const response = await localAxios.get('/products', { params });
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error data for handling in the thunk
  }
};


export const productColor = (data) => {
    return  localAxios.post('/product-color',data).then((response) => response.data);
}

export const productSize = (data) => {
    return  localAxios.post('/product-size',data).then((response) => response.data);
}

export const occassionList = (data) => {
    return  localAxios.post('/occassion_list',data).then((response) => response.data);
}
