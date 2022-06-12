import axios from "axios";
import { NEWS_FAILURE, NEWS_SUCCESS, NEWS_REQUEST } from "./actionType";

export const newsRequest=()=>({
    type : NEWS_REQUEST
})

export const newsSuccess=(data)=>({
   type : NEWS_SUCCESS,
   payload:data
})

export const newsFailure=()=>({
    type : NEWS_FAILURE
})

export const getData = ()=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:'https://newsapi.org/v2/top-headlines?country=in&apiKey=8dc9567f923f4c84bf8b69e6ee2a89dc',
        method:'GET'
    })
    .then((res)=>{
        console.log(res.data);
        dispatch (newsSuccess(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}