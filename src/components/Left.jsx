import React from "react";
import { MdInsertEmoticon } from "react-icons/md";

function Left() {
 return (
  <div className="left">
   <div className="image">
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
    <div className="emoticonBox">
     <MdInsertEmoticon className="emoticon" />
    </div>
   </div>
   <div className="leftDetails">
    <h2>Anjaly Soman</h2>
    <button>Edit Profile</button>
   </div>
  </div>
 );
}

export default Left;
