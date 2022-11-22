//  import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  editorText: "",
  previewText: "",
  username: "",
  authToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SOME_ACTION': {
      return {
        ...state,
      }
    }

    default:
      return state;

  }
};



export default combineReducers({
  reducer: reducer,
});
