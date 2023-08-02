import { LOAD_FAIL, LOAD_REQUEST, LOAD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, LOGOUT_SUCCESS, CLEAR_ERROR } from "../constance/constance";


export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case LOAD_REQUEST:
            return {
                loading: true,
                
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case LOAD_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOAD_FAIL:
            return {
                loading: false,
                error: action.payload,
                user: null
            }
        case LOGOUT_SUCCESS:
            return {
                user: null,
            }
        case CLEAR_ERROR:
            return {
                error: null
            }
        default:
            return {...state} 
    }
}