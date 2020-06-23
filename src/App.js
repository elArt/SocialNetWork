import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
                store={props.store}
              />
            )}
          />
            <Route
              path="/profile/:userId?"
              render={() => (
                <ProfileContainer
                  store={props.store}
                />
              )}
            />
          <Route
            path="/users"
            render={() => (
              <UsersContainer
                store={props.store}
              />
            )}
          />

          <Route
            path="/login"
            render={() => (
              <Login
                store={props.store}
              />
            )}
          />

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
