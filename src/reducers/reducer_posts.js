import {FETCH_POSTS} from '../actions/index';

const INITIAL_STATE ={all:[],post:null};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_POSTS:
		 return {...state, all: action.payload.data}
		default:
		 return state;
	}

}

/*Notes:
1.)const INITIAL_STATE ={all:[],post:null};
what is happening here is that you must figure out what you will be returing ie. will it display
a list from a get request? Or, will it be a single piece of info like for a /post/id  ? if a list
then [] array is in order ie all:[], then all: action.payload.data can be set to handle an array
of response to display. Or if single post returned then key value pair in order such as 
post:action.payload.data to handle single and display correctly.  

2.)remember when you see '...state' this is represents the 'current state'. all: action.payload.data
represents the payload from the action object. What happens is that you are combining the current  state
and the new action payload of the action object, to form a new state!!!
the current state (old state) and the payload.data = new state.
It is important to never!!! I mean never, mutate the current state! Ever!
The goal of a reducer is to return a new state period! So do not state.term='blagh' Dont do it!!
*/