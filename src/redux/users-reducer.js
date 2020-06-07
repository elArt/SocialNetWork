const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const USER_COUNT = "USER-COUNT";
const CURRENT_PAGE = "CURRENT-PAGE";
const IS_FETCHING = "IS-FETCHING";

const initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetchingValue: false,
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
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({ type: USER_COUNT, count });
export const setCurrentPage = (page) => ({ type: CURRENT_PAGE, page });
export const isFatchingFunc = (isFetchingValue) => ({ type: IS_FETCHING, isFetchingValue });

export default usersReducer;
