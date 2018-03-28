import {updateObject} from '../utility'

const initialState = {
  user: {
    username: 'Darth Vader',
    password: 'lukeandleia'
  }
};

export const userReducer = (state = initialState, action) => {
  console.log( action )
  switch (action.type) {
    case 'UPDATE_USER':
      return updateObject(state, action.user);
    default:
      return state;
  }
}