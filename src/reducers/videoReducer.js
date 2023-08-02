import { VIDEO_FAIL, VIDEO_REQUEST, VIDEO_SUCCESS, SINGLE_VIDEO_REQUEST, SINGLE_VIDEO_SUCCESS, SINGLE_VIDEO_FAIL, CLEAR_SINGLE_VIDEO, VIDEO_CLEAR, ADMIN_ALL_VIDEO_SUCCESS, ADMIN_ALL_VIDEO_REQUEST, ADMIN_ALL_VIDEO_FAIL } from "../constance/constance";



export const videoReducer = (state = { videos: [] }, action) => {
    switch (action.type) {
        case VIDEO_REQUEST:
            return {
                loading: true,

            }
        case VIDEO_SUCCESS:
            return {
                loading: false,
                videos: action.payload.video,
                videosCount: action.payload.videoCount,
                resultPerPage: action.payload.resultPerPage
            }
        case VIDEO_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case VIDEO_CLEAR:
            return {
                videos: null,
                loading: true
            }

        default:
            return { ...state }
    }
}



export const singleVideoReducer = (state = { video: {} }, action) => {
    switch (action.type) {
        case SINGLE_VIDEO_REQUEST:
            return {
                loading: true,

            }
        case SINGLE_VIDEO_SUCCESS:
            return {
                loading: false,
                video: action.payload
            }
        case SINGLE_VIDEO_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_SINGLE_VIDEO:
            return {
                video: {}
            }

        default:
            return { ...state }
    }
}



export const adminVideoReducer = (state = { videos: [] }, action) => {
    switch (action.type) {
        case ADMIN_ALL_VIDEO_REQUEST:
            return {
                loading: true,

            }
        case ADMIN_ALL_VIDEO_SUCCESS:
            return {
                loading: false,
                videos: action.payload.video,
                videosCount: action.payload.videoCount,
            }
        case ADMIN_ALL_VIDEO_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}


