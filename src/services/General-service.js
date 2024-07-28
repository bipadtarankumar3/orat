import { localAxios } from "./Axios";

export const bannerList = () => {
    return  localAxios.post('/banner_list').then((response) => response.data);
}

export const categoryList = (data=null) => {
    return  localAxios.post('/category_list',data).then((response) => response.data);
}

export const designerList = (data) => {
    return  localAxios.post('/designer_list',data).then((response) => response.data);
}

