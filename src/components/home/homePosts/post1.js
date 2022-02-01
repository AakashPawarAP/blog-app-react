import React from "react";
import img1 from "../../../images/home/img1.jpg";
import ShareIcon from "../share";
import "./posts.css";
import Clap from "../../clap";
import LatestSuggest from "../../home/latestSuggest";

const Post1 = () => {
  return (
    <>
      <div className="container-blog">
        <ShareIcon />
        <h1>
          SPIDER-MAN: NO WAY HOME's leaks confirm its biggest crossover
          characters
        </h1>
        <img className="posts" src={img1} alt="hii" />
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32
        </div>
        <br />
        <h4>Travel</h4>
        <span> / 12 july 2021</span>
        <Clap />
      </div>
      <br />
      <br />
      <br />
      <br />
      <LatestSuggest />
    </>
  );
};

export default Post1;
