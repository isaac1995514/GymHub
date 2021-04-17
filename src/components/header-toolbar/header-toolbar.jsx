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

function HeaderToolbar(props) {
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
        {userMenu}
      </div>
    </div>
  );
}

HeaderToolbar.propTypes = {};

export default HeaderToolbar;
