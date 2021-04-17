import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

/* Components */
import Home from "./components/home/home";

/* Style */
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
