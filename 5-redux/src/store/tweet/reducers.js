import {updateObject} from '../utility'

const initialState = {
  tweets: []
};

export const tweetReducer = (state = initialState, action) => {
  console.log( action )
  switch (action.type) {
    case 'ADD_TWEET':
      return [...state.tweets, action.tweet];
    default:
      return state;
  }
}