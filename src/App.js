import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

/* Components */
import Home from "./components/home/home";
import CircularProgress from "@material-ui/core/CircularProgress";
import AuthPage from "./components/auth-page/auth-page";

/* Style */
import "./App.scss";

/* Database */
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

/* Utils */
import classnames from "classnames";

/* Context */
import { UserInfoContext } from "./context";

function App() {
  const auth = firebase.auth();

  const [user, isUserLoading, userError] = useAuthState(auth);

  // Display Loading Screen when user is not ready
  if (isUserLoading) {
    return (
      <div className={classnames("loading-screen")}>
        <CircularProgress />
      </div>
    );
  }

  // Display Login Page when user is not login
  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="app-container">
      <UserInfoContext.Provider value={user}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </UserInfoContext.Provider>
    </div>
  );
}

export default withRouter(App);
