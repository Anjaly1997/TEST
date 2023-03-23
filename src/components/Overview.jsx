import React from "react";
import list from "../list.json";

function Overview() {
 return (
  <div className="overview">
   <div className="overviewDescription">
    <p>Anjaly Soman/README.md</p>
    <h1>Hi I am Anjaly Soman</h1>
    <div className="line" />
    <h2>A React Developer</h2>
    <p>I Love Coding</p>
    <p>I am learning backend</p>
    <p>Follow me on Instagram</p>
   </div>
   <div className="repositories">
    <div className="repositoriesTitle">
     <h2>Popular repositories</h2>
    </div>
    <div className="repositoriesContainer">
     {list.map((repo, idx) => (
      <div className="repositoriesBox" key={idx}>
       <div className="repositoriesTop">
        <h3>{repo.repo}</h3>
        <p>{repo.status}</p>
       </div>
       <div className="repositoriesBottom">
        <p>{repo.stack}</p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default Overview;
