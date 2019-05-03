const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

export const redit = ( state = [], action ) {
  switch (action.type) {
    case FETCH_POSTS: 
      return state;
    case FETCH_POSTS_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};

