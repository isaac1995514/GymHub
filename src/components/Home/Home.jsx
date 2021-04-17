import React, { useState } from "react";

/* Context */
import { UserInfoContext } from "../../context";

/* Components */
import HeaderToolbar from "../header-toolbar/header-toolbar";
import ContentPage from "../content-page/content-page";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

/* Utils */
import classnames from "classnames";

/* Style */
import "./home.scss";

const userDrawerStyle = makeStyles({
  list: {
    width: 250,
  },
  listItemText: {
    color: "white",
  },
});

function Home() {
  const drawerClasses = userDrawerStyle();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [drawerSelection, setDrawerSelection] = useState("Dashboard");

  /* Handle Toggle Drawer On/Off */
  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  /* Handle Selection Drawer List Option */
  const handleDrawerItemSelect = (key) => (e) => {
    setDrawerSelection(key);
  };

  return (
    <div className={classnames("home-page-wrapper")}>
      <HeaderToolbar toggleDrawer={toggleDrawer} />
      <ContentPage />
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ root: drawerClasses.drawer }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className={classnames("drawer-list-wrapper")}
        >
          <List className={drawerClasses.list}>
            {["Dashboard", "Exercise Log"].map((text, index) => (
              <ListItem
                button
                key={text}
                classes={{ primary: drawerClasses.listItem }}
                selected={text === drawerSelection}
                onClick={handleDrawerItemSelect(text)}
              >
                <ListItemText
                  primary={text}
                  classes={{ root: drawerClasses.listItemText }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Home;
