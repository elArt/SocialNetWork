import { applyMiddleware, createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import sidebarReducer from "./sidebar-reducer";

const redusers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  sidebar: sidebarReducer,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
