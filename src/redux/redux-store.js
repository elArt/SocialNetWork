import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const redusers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer
});

const store = createStore(redusers);

export default store;
