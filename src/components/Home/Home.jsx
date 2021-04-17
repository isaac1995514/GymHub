import React, { Component } from "react";

/* Database */
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

/* Context */
import { UserInfoContext } from "../../context";

/* Components */
import AuthPage from "../auth-page/auth-page";
import HeaderToolbar from "../header-toolbar/header-toolbar";
import ContentPage from "../content-page/content-page";

/* Utils */
import classNames from "classnames";

/* Style */
import "./home.scss";

function Home() {
  const auth = firebase.auth();

  const [user] = useAuthState(auth);

  return (
    <div className="app-container">
      {user ? (
        <UserInfoContext.Provider value={user}>
          <div className={classNames("home-page-wrapper")}>
            <HeaderToolbar />
            <ContentPage />
          </div>
        </UserInfoContext.Provider>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default Home;
