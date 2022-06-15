import { NEWS_FAILURE, NEWS_REQUEST, NEWS_SUCCESS,NEWS_SUCCESSO,NEWS_SUCCESSS,NEWS_SUCCESSL, NEWS_SUCCESSE, NEWS_SUCCESSSP, NEWS_SUCCESST, NEWS_SUCCESSM, NEWS_SUCCESSED } from "./actionType"
const initState={
    loading:true,
    data:[],
    data1:[],
    data2:[],
    data3:[],
    data4:[],
    data5:[],
    data6:[],
    data7:[],
    data8:[],
    error:false
}
export const NewsReducer = (state=initState,action)=>{
    switch(action.type){
        case NEWS_REQUEST:{
            return { 
                ...state,
                loading:true,
                error:false
          }
        }
        case NEWS_SUCCESS:{
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESSED:{
            return {
                ...state,
                loading:false,
                data8:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESST:{
            return {
                ...state,
                loading:false,
                data6:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESSM:{
            return {
                ...state,
                loading:false,
                data7:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESSO:{
            return {
                ...state,
                loading:false,
                data3:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESSSP:{
            return {
                ...state,
                loading:false,
                data5:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESSL:{
            return {
                ...state,
                loading:false,
                data1:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESSE:{
            return {
                ...state,
                loading:false,
                data4:action.payload,
                error:false
            }
        }
        case NEWS_SUCCESSS:{
            return {
                ...state,
                loading:false,
                data2:action.payload,
                error:false
            }
        }
        case NEWS_FAILURE:{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        default :{
            return (state)
        }
    }
}