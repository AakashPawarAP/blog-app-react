import React from "react";
import img1 from "../../images/home/latest/wolf.jpg";
import ShareIcon from "../home/share";
import Clap from "../clap";
import LatestSuggest from "../home/latestSuggest";

const LatestPost1 = () => {
  return (
    <>
      <div className="container-blog">
        <ShareIcon />

        <h1>Trail of a mountain traveller</h1>
        <img className="posts" src={img1} alt="hii" />
        <div>
          ACKNOWLEDGED as a global Travel influencer, and one who has in just
          five years travelled to almost 25 countries and helped boost their
          tourism through his travel Vlogs on his YouTube Channel Mountain
          Trekker, 39-year-old Varun Vagish, carries a dream of helping raise
          the bar for domestic tourism.
        </div>
        <br />
        <h4>Travel</h4>
        <span> / August 21 2021</span>

        <Clap />
      </div>

      <LatestSuggest />
    </>
  );
};

export default LatestPost1;
