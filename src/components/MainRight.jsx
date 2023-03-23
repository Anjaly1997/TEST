import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

function MainRight() {
 return (
  <div className="mainRight">
   <div className="mainRightContainer">
    <div className="mainRightText">
     <h2>Following</h2>
     <h2>For you</h2>
    </div>
    <div className="lineTwo" />
    <div className="box">
     <h2>
      welcome..... this is github clone with react, sass and react router
     </h2>
     <p>
      Follow mw on <span>Youtube</span>,<span>Twitter</span>and{" "}
      <span>Instagram</span>
     </p>
     <button className="btn">
      <Link to="/profile">Github clone</Link>
     </button>
    </div>
    <div className="boxCenter">
     <div className="boxCenterFirst">
      <IoBulbOutline />
      <p>heloo heloo heloo heloo helooheloo heloo heloo heloo</p>
     </div>
     <div className="boxCenterFirst">
      <MdRssFeed />
      <p>Subscribe to the channel,to stay updated</p>
     </div>
    </div>
    {/* Footer */}
    <div className="footer">
     <div className="footerFirst">
      <img src={logo} alt="" />
      <h4>Github CLone</h4>
     </div>
     <div className="footerSecond">
      <div className="footerSecondInside">
       <h4>Blog</h4>
       <h4>About</h4>
       <h4>Shop</h4>
       <h4>GitHub Clone</h4>
       <h4>Pricing</h4>
      </div>
      <div className="footerSecondInside">
       <h4>API</h4>
       <h4>Training</h4>
       <h4>Status</h4>
       <h4>Security</h4>
      </div>
      <div className="footerSecondInside">
       <h4>Terms</h4>
       <h4>Privacy</h4>
       <h4>Docs</h4>
      </div>
     </div>
    </div>
    <div className="lineTwo" />
   </div>
  </div>
 );
}

export default MainRight;
