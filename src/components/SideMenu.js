import React from "react";
import "./sidemenu.css";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

function SideMenu({ closeMenu, close }) {
  let classes = ["sidemenu"];

  if (!close) {
    classes = ["sidemenu", "close"];
  } else {
    classes = ["sidemenu"];
  }
  return (
    <div className={classes.join(" ")}>
      <div className="sidemenu__header">
        <h1>MaStyle</h1>
        <CancelOutlinedIcon className="sidemenu__cross" onClick={closeMenu} />
      </div>

      <ul>
        <li>
          <a href="/#">T-Shirts</a>
        </li>
        <li>
          <a href="/#">About Us</a>
        </li>
        <li>
          <a href="/#">Reviews</a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
