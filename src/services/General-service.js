import { localAxios } from "./Axios";

export const bannerList = () => {
    return  localAxios.post('/banner_list').then((response) => response.data);
}

export const categoryList = () => {
    return  localAxios.post('/category_list').then((response) => response.data);
}

export const designerList = (data) => {
    return  localAxios.post('/designer_list',data).then((response) => response.data);
}