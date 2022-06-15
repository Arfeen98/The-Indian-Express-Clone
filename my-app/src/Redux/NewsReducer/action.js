import axios from "axios";
import { NEWS_FAILURE, NEWS_SUCCESS,NEWS_SUCCESSL,NEWS_SUCCESSS, NEWS_REQUEST } from "./actionType";

export const newsRequest=()=>({
    type : NEWS_REQUEST
})

export const newsSuccess=(data)=>({
   type : NEWS_SUCCESS,
   payload:data
})
export const newsSuccessL=(data)=>({
   type : NEWS_SUCCESSL,
   payload:data
})
export const newsSuccesss=(data)=>({
   type : NEWS_SUCCESSS,
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
        // console.log(res.data);
        // console.log('1')
        dispatch (newsSuccess(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getLatest = ()=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:'https://newsapi.org/v2/everything?q=latest&apiKey=8dc9567f923f4c84bf8b69e6ee2a89dc',
        method:'GET'
    })
    .then((res)=>{
        // console.log(res.data);
        // console.log('2');
        dispatch (newsSuccessL(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getState = (q)=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:`https://newsapi.org/v2/top-headlines?q=${q}&apiKey=8dc9567f923f4c84bf8b69e6ee2a89dc`,
        method:'GET',
        params:{
            q
        }
    })
    .then((res)=>{
        // console.log(res.data);
        console.log('3');
        dispatch (newsSuccesss(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}