/* import {createStore} from 'redux';


//Action Increment

const increment =()=>{
  return{
    type: 'INCREMENT'
  };
};

const decrement =()=>{
  return {
    type: 'DECREMENT'
  };
};

//Reducer

const counter =(state = 0,action) =>{
  // eslint-disable-next-line default-case
  switch(action.type){
    case 'INCREMENT':
      return state +1;
      case 'DECREMENT':
        return state -1;
  }

};

let store = createStore(counter);

store.subscribe(()=> console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement()); */

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    counter : counterReducer,
    isLogged: loggedReducer 
});

export default allReducers;