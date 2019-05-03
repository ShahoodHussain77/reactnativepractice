import { combineReducers } from 'redux';

const CREATE_TODO = "CREATE_TODO";

const user = (state = {}, action) => {
	return state;
}

const todo = (state = [], action) => {
	switch(action.type) {
		case CREATE_TODO:
			return [
				action.payload,
				...state
			]
		default:
			return state;
	}
}

export const reducer = combineReducers({ todo, user })
