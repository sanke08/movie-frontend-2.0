import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { authReducer } from "./reducers/authReducer"
import { videoReducer, singleVideoReducer, adminVideoReducer } from "./reducers/videoReducer"
import { userReducers } from "./reducers/userReducers"



const reducer = combineReducers({
    user: authReducer,
    videos: videoReducer,
    video: singleVideoReducer,
    users: userReducers,
    adminVideos:adminVideoReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store