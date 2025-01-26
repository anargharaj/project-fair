
import commonAPI from "./commonApi";

import SERVER_BASE_URL from "./serverUrl";

// registerApi
// return koduthillel orikkalum call cheyunnna sthalethek response povilla

export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// loginApi

export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add-project

export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}

// home-projects

export const homeProjectsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}

// user-projects

export const userProjectsAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}

// all-projects

export const allProjectsAPI=async(reqHeader,searchKey)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}

// projects/98849285djhesfjhjfh/edit

export const updateProjectAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/projects/${id}/edit`,reqBody,reqHeader)

}

// projects/:id/remove

export const deleteProjectAPI=async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/projects/${id}/remove`,{},reqHeader)

}

// user/edit

export const updateUserAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader)

}

