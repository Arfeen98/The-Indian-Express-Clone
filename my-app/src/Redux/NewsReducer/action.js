import axios from "axios";
import { NEWS_FAILURE,NEWS_SUCCESSE,NEWS_SUCCESS,NEWS_SUCCESSO,NEWS_SUCCESSL,NEWS_SUCCESSS,NEWS_SUCCESSSP, NEWS_REQUEST, NEWS_SUCCESST, NEWS_SUCCESSM, NEWS_SUCCESSED } from "./actionType";

export const newsRequest=()=>({
    type : NEWS_REQUEST
})

export const newsSuccess=(data)=>({
   type : NEWS_SUCCESS,
   payload:data
})
export const newsSuccessed=(data)=>({
   type : NEWS_SUCCESSED,
   payload:data
})
export const newsSuccessm=(data)=>({
   type : NEWS_SUCCESSM,
   payload:data
})
export const newsSuccesst=(data)=>({
   type : NEWS_SUCCESST,
   payload:data
})
export const newsSuccesssp=(data)=>({
   type : NEWS_SUCCESSSP,
   payload:data
})
export const newsSuccesso=(data)=>({
   type : NEWS_SUCCESSO,
   payload:data
})
export const newsSuccesse=(data)=>({
   type : NEWS_SUCCESSE,
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
        // url:'https://newsapi.org/v2/top-headlines?country=in&apiKey=8dc9567f923f4c84bf8b69e6ee2a89dc',
        // method:'GET'
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

export const getOnly = (q)=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:`https://newsapi.org/v2/everything?q=${q}&apiKey=8bea7b8dc9f94145b5989dd6f24a547c`,
         method:'GET',
         params:{
            q
         }
    })
    .then((res)=>{
        dispatch (newsSuccesso(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getTecho = (q)=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:`https://newsapi.org/v2/everything?q=${q}&apiKey=8bea7b8dc9f94145b5989dd6f24a547c`,
         method:'GET',
         params:{
            q
         }
    })
    .then((res)=>{
        dispatch (newsSuccesst(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getTrend = (q)=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:`https://newsapi.org/v2/everything?q=${q}&apiKey=8bea7b8dc9f94145b5989dd6f24a547c`,
         method:'GET',
         params:{
            q
         }
    })
    .then((res)=>{
        dispatch (newsSuccessm(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getEdu = (q)=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:`https://newsapi.org/v2/everything?q=${q}&apiKey=8bea7b8dc9f94145b5989dd6f24a547c`,
         method:'GET',
         params:{
            q
         }
    })
    .then((res)=>{
        dispatch (newsSuccessed(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getSport = (q)=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:`https://newsapi.org/v2/everything?q=${q}&apiKey=8bea7b8dc9f94145b5989dd6f24a547c`,
         method:'GET',
         params:{
            q
         }
    })
    .then((res)=>{
        dispatch (newsSuccesssp(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getEnter = (q)=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        url:`https://newsapi.org/v2/everything?q=${q}&apiKey=8bea7b8dc9f94145b5989dd6f24a547c`,
         method:'GET',
         params:{
            q
         }
    })
    .then((res)=>{
        dispatch (newsSuccesse(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(newsFailure());
    })
}
export const getLatest = ()=>(dispatch)=>{
    dispatch(newsRequest());
    return axios({
        // url:'https://newsapi.org/v2/everything?q=latest&apiKey=8dc9567f923f4c84bf8b69e6ee2a89dc',
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
        // url:`https://newsapi.org/v2/top-headlines?q=${q}&apiKey=8bea7b8dc9f94145b5989dd6f24a547c`,
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

// 8bea7b8dc9f94145b5989dd6f24a547c