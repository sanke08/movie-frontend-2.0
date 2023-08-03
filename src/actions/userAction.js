import axios from "axios"
import { DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../constance/constance"




export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST })
        const { data } = await axios.get(`https://movie-api-orcin-one.vercel.app/api/user/getAllUsers`)
        dispatch({ type: GET_USERS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: GET_USERS_FAIL, payload: error.response.data.message })

    }
}



