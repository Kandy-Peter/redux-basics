import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//redux
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import { addPosts, getPosts } from "./actions/post.action";
import { getUsers } from "./actions/user.action";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

//to launch all actions we have to use the dispatch method
store.dispatch(getPosts());
store.dispatch(getUsers());
store.dispatch(addPosts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
