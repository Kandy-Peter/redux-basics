import axios from 'axios';

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export const getPosts  = () =>{

    return(dispatch) =>{
        //action
        return axios.get('http://localhost:3000/posts?_sort=id&_order=desc').then((res) =>{
            dispatch({type: GET_POSTS, payload: res.data});
        }).catch((error) => console.log(error));
    }
}
export const addPosts  = (data) =>{

    return(dispatch) =>{
        //action
        return axios.get('http://localhost:3000/posts', data).then((res) =>{
            dispatch({type: ADD_POSTS, payload: data});
        }).catch((error) => console.log(error));
    }
}