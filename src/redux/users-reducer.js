import {usersAPI} from "./../api/api";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const USER_COUNT = "USER-COUNT";
const CURRENT_PAGE = "CURRENT-PAGE";
const IS_FETCHING = "IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetchingValue: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case USER_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }
    case IS_FETCHING: {
        return { ...state, isFetchingValue: action.isFetchingValue };
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {      
      return { 
          ...state, 
          followingInProgress: action.isFetching 
          ? [...state.followingInProgress, action.userId] 
          : [state.followingInProgress.filter(id=>id!==action.userId)] 
        };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({ type: USER_COUNT, count });
export const setCurrentPage = (page) => ({ type: CURRENT_PAGE, page });
export const isFatchingFunc = (isFetchingValue) => ({ type: IS_FETCHING, isFetchingValue });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) =>{
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(isFatchingFunc(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(isFatchingFunc(false));
    });
  };
};

export const follow = (userId) =>{
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,  userId));
    usersAPI.follow(userId)
      .then(response => {
          if (response.data.resultCode === 0) {
              dispatch(followSuccess(userId));
          }
          dispatch(toggleFollowingProgress(false, userId));
      });
  };
};

export const unfollow = (userId) =>{
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,  userId));
    usersAPI.unfollow(userId)
      .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
          }
          dispatch(toggleFollowingProgress(false, userId));
      });
  };
};





export default usersReducer;
