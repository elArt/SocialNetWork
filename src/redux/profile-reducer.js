import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE"

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 }
  ],
  newPostText: "",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      return {
        ...state,
        posts: [...state.posts, {
            id: Date.now(),
            message: state.newPostText,
            likesCount: 0
            }
          ],
        newPostText: '',
      };
    };
    case UPDATE_NEW_POST_TEXT:{
      return {...state, newPostText: action.newText};
    };
    case SET_USER_PROFILE:{
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
};

export const addNewPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const changeInput = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
      usersAPI.getUserProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
      });
  }
}

export default profileReducer;
