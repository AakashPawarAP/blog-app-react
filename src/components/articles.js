import React from "react";
import ShareIcon from "./home/share";
import Clap from "./clap";
import LatestSuggest from "./home/latestSuggest";

export default function ViewArticles(prop) {
  // console.log(prop.location.state);
  return (
    <>
      <div className="article-container">
        <ShareIcon />
        <h1>{prop.location.state.heading}</h1>
        <img className="aimg" src={prop.location.state.img} alt="hii" />
        <div>
          {prop.location.state.desc +
            prop.location.state.desc +
            prop.location.state.desc}
        </div>

        <h4>{prop.location.state.type}</h4>
        <span>{prop.location.state.date}</span>
        <Clap />
      </div>
      <LatestSuggest />
    </>
  );
}
