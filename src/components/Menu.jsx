import React from "react";

function Menu() {
 return (
  <div className="menu">
   <div className="menuContainer">
    <p>
     Signed in as <br />
     Anjaly Soman
    </p>
    <div className="lineThree" />
    <div className="menuStatus">
     <input type="text" placeholder="Set Status" />
    </div>
    <div className="lineThree" />

    <p>Your Repositories</p>
    <p>Your Codespaces</p>
    <p>Your Organisations</p>
    <p>Your Projects</p>
    <p>Your Stars</p>
    <p>Ypur gists</p>
    <div className="lineThree" />
    <p>Upgrade</p>
    <p>Feature Preview</p>
    <p>Help</p>
    <p>Settings</p>
    <div className="lineThree" />
    <p>Sign Out</p>
   </div>
  </div>
 );
}

export default Menu;
