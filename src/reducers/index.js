import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
//notice you do not have to create and import a seperate reducer for reduxForm
//it is built in. So just import straigtht from node_modules below!!! 

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  //you can pick up either state.posts.all or state.posts.post for list or single data
  //from reducer_posts.js's INITIAL_STATE ={all:[],post:null};
  posts: PostReducer,
  form: formReducer,

});

export default rootReducer;
