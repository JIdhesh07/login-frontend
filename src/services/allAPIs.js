import { baseUrl } from "./baseUrl";
import { commonAPI } from "./commonAPI";

export const registerAPI=async(user)=>{
    return await commonAPI('post',`${baseUrl}/register`,user,"")
}


export const loginAPI=async(user)=>{
    return await commonAPI('post',`${baseUrl}/login`,user,"")
}

