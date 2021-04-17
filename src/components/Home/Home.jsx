import React, { Component } from "react";

/* Context */
import { UserInfoContext } from "../../context";

/* Components */
import HeaderToolbar from "../header-toolbar/header-toolbar";
import ContentPage from "../content-page/content-page";

/* Utils */
import classnames from "classnames";

/* Style */
import "./home.scss";

function Home() {
  return (
    <div className={classnames("home-page-wrapper")}>
      <HeaderToolbar />
      <ContentPage />
    </div>
  );
}

export default Home;
