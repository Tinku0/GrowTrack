import axios from "./axiosInstance"
import { ENDPOINTS } from "./endpoints"

export const signInUser = (data) => {
    return axios.post(ENDPOINTS.SIGNIN, data)
}

export const signUpUser = (data) => {
    return axios.post(ENDPOINTS.SIGNUP, data)
}