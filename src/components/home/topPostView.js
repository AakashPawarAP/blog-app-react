import React from "react";
import ShareIcon from "./share";
// import img from "../../images/home/latest-article/img1.jpg"
// import "./articles.css"
import Clap from "../clap";
import LatestSuggest from "./latestSuggest";

export default function TopPostsView(prop) {
  // console.log(prop.location.state);
  return (
    <>
      <div className="article-container">
        <ShareIcon />
        <h1>{prop.location.state.blogHead}</h1>
        <img className="aimg" src={prop.location.state.img} alt="hii" />
        <div>
          {prop.location.state.blogDesc +
            "" +
            prop.location.state.blogDesc +
            "" +
            prop.location.state.blogDesc}
        </div>

        <h4>{prop.location.state.type}</h4>
        <span>{prop.location.state.date}</span>
        <Clap />
      </div>
      <LatestSuggest />
    </>
  );
}
