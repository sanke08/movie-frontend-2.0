import axios from "axios"
import { VIDEO_FAIL, VIDEO_REQUEST, VIDEO_SUCCESS, SINGLE_VIDEO_REQUEST, SINGLE_VIDEO_SUCCESS, SINGLE_VIDEO_FAIL, VIDEO_CLEAR, ADMIN_ALL_VIDEO_SUCCESS, ADMIN_ALL_VIDEO_FAIL, ADMIN_ALL_VIDEO_REQUEST } from "../constance/constance"


export const getAllVideos = (keyword = "", currentPage = 1) => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get(`https://movie-api-orcin-one.vercel.app/api/video/getAllVideo?keyward=${keyword}&page=${currentPage}`, config)
        data && dispatch({ type: VIDEO_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: VIDEO_FAIL, payload: error.response.data.message })
        console.log(error)
    }
}

export const getRandomVideos = () => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_CLEAR })
        dispatch({ type: VIDEO_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get(`https://movie-api-orcin-one.vercel.app/api/video/getRandomVideo`, config)
        data && dispatch({ type: VIDEO_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: VIDEO_FAIL, payload: error.response.data.message })
    }
}


export const getSingleVideo = (id) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_VIDEO_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get(`https://movie-api-orcin-one.vercel.app/api/video/getVideo/${id}`, config)
        data && dispatch({ type: SINGLE_VIDEO_SUCCESS, payload: data.video })

    } catch (error) {
        dispatch({ type: SINGLE_VIDEO_FAIL, payload: error.response.data.message })
    }
}



export const adminAllVideos = (keyword="") => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_ALL_VIDEO_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get(`https://movie-api-orcin-one.vercel.app/api/video/getAllVideoAdmin?keyward=${keyword}`, config)
        dispatch({ type: ADMIN_ALL_VIDEO_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ADMIN_ALL_VIDEO_FAIL, payload: error.response.data.message })
        console.log(error)
    }
}
