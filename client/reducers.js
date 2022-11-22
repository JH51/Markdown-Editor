//  import * as types from '../constants/actionTypes';
import { combineReducers } from "redux";

const initialState = {
  editorText:
    "#Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis aliquet sapien, id faucibus erat. In vitae convallis metus, eget cursus ex. Suspendisse in risus et nulla auctor efficitur. Donec tellus purus, vestibulum varius elit non, bibendum tincidunt neque. Morbi elementum, lacus a blandit lacinia, eros ipsum ornare mauris, nec dictum mauris nunc non ligula. Aenean ultrices tempor efficitur. Sed consectetur in elit non ornare. Morbi non euismod velit, et faucibus lectus. Curabitur ac diam sed quam efficitur dignissim nec at lacus. Ut sit amet nibh mollis, accumsan lacus sed, commodo elit. Donec auctor nisl et blandit euismod. Donec tempus pretium ultricies. Aenean nec est laoreet, lobortis urna nec, commodo diam. Sed pulvinar, dui sollicitudin dictum scelerisque, dolor purus facilisis magna, et maximus felis odio in ex. Nunc imperdiet dictum aliquam. Praesent sit amet semper metus, ut porta massa. Morbi nec commodo quam, quis elementum lectus. Aliquam non metus tincidunt, scelerisque eros ac, pharetra quam. Maecenas placerat justo at enim bibendum mattis.",
  previewText: "DEFAULT PREVIEW TEXT",
  username: "",
  authToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_EDITOR_TEXT": {
      return {
        ...state,
        editorText: action.payload,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer,
});
