import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

/* Context */
import UserInfoContext from "../../context/user-info-context";

/* Util */
import classnames from "classnames";

/* Style */
import "./header-toolbar.scss";

/* Database */
import firebase from "firebase";

/* Component */
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";

function HeaderToolbar(props) {
  const { toggleDrawer } = props;

  const userInfo = useContext(UserInfoContext);

  const [userMenuAnchor, setUserMenuAnchor] = useState(false);

  const onSignOut = () => {
    if (userInfo) {
      const auth = firebase.auth();
      auth.signOut();
    }
  };

  const handleUserIconClick = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const userMenu = (
    <div
      className={classnames(
        "user-info-icon-button-wrapper icon-button-wrapper"
      )}
    >
      <img
        role="button"
        onClick={handleUserIconClick}
        className={classnames("user-info-icon-button", `${name}-icon`)}
        src={userInfo.photoURL}
        alt={`User Info`}
      />
      <Menu
        id="User Menu"
        anchorEl={userMenuAnchor}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(userMenuAnchor)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleUserMenuClose}
      >
        <MenuItem onClick={onSignOut}>Logout</MenuItem>
      </Menu>
    </div>
  );

  return (
    <div className={classnames("header-toolbar-wrapper")}>
      <div className={classnames("header-toolbar-content-wrapper")}>
        <div
          className={classnames(
            "header-toolbar-section",
            "header-toolbar-content-left"
          )}
        >
          <div className={classnames("menu-icon-button-wrapper")}>
            <IconButton onClick={toggleDrawer(true)}>
              <ListIcon />
            </IconButton>
          </div>
        </div>
        <div
          className={classnames(
            "header-toolbar-section",
            "header-toolbar-content-right"
          )}
        >
          {userMenu}
        </div>
      </div>
    </div>
  );
}

HeaderToolbar.propTypes = {};

export default HeaderToolbar;
