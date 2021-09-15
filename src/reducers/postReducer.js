import { GET_POSTS, ADD_POSTS } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState,action) {
   switch (action.type) {
       case GET_POSTS:
           return action.payload;
       case ADD_POSTS:
           return [action.payload, ...state]; 
           //meaning: when I add a new post, the action will take, not only the post, but also all the state
       default:
           return state;
   }
}