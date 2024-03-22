import { baseUrl } from "./baseUrl";
import { commonAPI } from "./commonAPI";

export const registerAPI=async(user)=>{
    return await commonAPI('post',`${baseUrl}/register`,user,"")
}


export const loginAPI=async(user)=>{
    return await commonAPI('post',`${baseUrl}/login`,user,"")
}

// export const updateUserAPI = async(userId,reqBody)=>{
//     return await commonAPI("put",`${baseUrl}/update/${userId}`,reqBody)
// }
export const AddFormDataAPI = async(reqBody,reqHeader) => {
    return await commonAPI("post",`${baseUrl}/form/add`,reqBody,reqHeader)
    
}