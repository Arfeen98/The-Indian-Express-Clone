import { NEWS_FAILURE, NEWS_REQUEST, NEWS_SUCCESS,NEWS_SUCCESSS,NEWS_SUCCESSL } from "./actionType"
const initState={
    loading:true,
    data:[],
    data1:[],
    data2:[],
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
        case NEWS_SUCCESSL:{
            return {
                ...state,
                loading:false,
                data1:action.payload,
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