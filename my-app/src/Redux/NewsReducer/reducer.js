import { NEWS_FAILURE, NEWS_REQUEST, NEWS_SUCCESS } from "./actionType"

const initState={
    loading:true,
    data:[],
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