import {createStore, combineReducers} from "redux";
import TweetReducer from "../reducer/TweetReducer.jsx";
import tweets from "./TweetDump.jsx";

const numReducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  }
  return initialState;
}

TweetReducer

const reducers = combineReducers({
  num: numReducer,
  tweets: TweetReducer
})

const store = createStore(reducers)

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "LOAD_PAYLOAD_TWEET", payload: tweets});
store.dispatch({type: "TWEET", payload: "Test Tweet"})

window.reduxStore = store;

export default store;