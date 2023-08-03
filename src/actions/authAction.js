import { LOAD_FAIL, LOAD_REQUEST, LOAD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, LOGOUT_SUCCESS } from "../constance/constance"
import axios from "axios"



export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST })
        const config = { headers: { "Content-Type": "application/json",} }
        const { data } = await axios.post(`https://movie-api-orcin-one.vercel.app/api/auth/signup`, { email: email, password: password, name: name, }, config)
        dispatch({ type: REGISTER_SUCCESS, payload: data.user })
    }
    catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.data.message })

    }
}







export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = { headers: { "Content-Type": "application/json",} }
        const { data } = await axios.post(`https://movie-api-orcin-one.vercel.app/api/auth/signin`, { email: email, password: password }, config)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    }
    catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
    }
}



export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_REQUEST })
        const config = { headers: { "Content-Type": "application/json", } }
        const { data } = await axios.get(`https://movie-api-orcin-one.vercel.app/api/user/me`,config)
        dispatch({ type: LOAD_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: LOAD_FAIL, payload: error.response.data.message })
    }
}




export const logout = () => async (dispatch) => {
    try {
        axios.get(`https://movie-api-orcin-one.vercel.app/api/auth/logout`)
        dispatch({ type: LOGOUT_SUCCESS })
    } catch (e) {

    }

}
