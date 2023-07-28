import axios from "axios"
import { VIDEO_FAIL, VIDEO_REQUEST, VIDEO_SUCCESS, SINGLE_VIDEO_REQUEST, SINGLE_VIDEO_SUCCESS, SINGLE_VIDEO_FAIL, VIDEO_CLEAR } from "../constance/constance"
import server from "../index"


export const getAllVideos = (keyword = "", currentPage = 1) => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_REQUEST })
        const config = { headers: { "Content-Type": "application/json"} }
        const { data } = await axios.get(`https://movie-api-nu-nine.vercel.app/api/video/getAllVideo?keyward=${keyword}&page=${currentPage}`,config)
        console.log("data")
        data && dispatch({ type: VIDEO_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: VIDEO_FAIL, payload: error.response.data.message })
        console.log(error)
    }
}

export const getRandomVideos=()=>async(dispatch)=>{
    try {
        dispatch({type:VIDEO_CLEAR})
        dispatch({ type: VIDEO_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get(`https://movie-api-nu-nine.vercel.app/api/video/getRandomVideo`,config)
        data &&  dispatch({ type: VIDEO_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: VIDEO_FAIL, payload: error.response.data.message })
    }
}


export const getSingleVideo = (id) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_VIDEO_REQUEST })
        const config = { headers: { "Content-Type": "application/json"} }
        const { data } = await axios.get(`https://movie-api-nu-nine.vercel.app/api/video/getVideo/${id}`,config)
        data && dispatch({ type: SINGLE_VIDEO_SUCCESS, payload: data.video })

    } catch (error) {
        dispatch({ type: SINGLE_VIDEO_FAIL, payload: error.response.data.message })
    }
}