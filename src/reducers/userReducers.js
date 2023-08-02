import { CLEAR_ERROR, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../constance/constance"

export const userReducers = (state = { user: {} }, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:

            return {
                loading: true,
            }
        case GET_USERS_SUCCESS:

            return {
                loading: false,
                users: action.payload.users,
                userCount:action.payload.userCounts
            }
        case GET_USERS_FAIL:

            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERROR:
            return {
                error: null
            }
        default:
            return { ...state }
    }
}