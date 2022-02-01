import React from "react";
import wolf from "../../images/home/latest/wolf.jpg";
import f1 from "../../images/fitness/f1.jpeg";
import t1 from "../../images/technology/t1.jpg";

const LatestSuggest = () => {
  return (
    <>
      <h2>More Articles</h2>
      <div className="latest-card-parent">
        <div className="latest-card">
          <img className="latest-card-img" src={wolf} alt="" />
          <div className="latest-card-text">
            <span className="blog-heading">Trail of a mountain traveller</span>
            <p>
              ACKNOWLEDGED as a global Travel influencer, and one who has in
              just five years travelled to almost 25 countries and helped boost
              their tourism through his travel Vlogs on his YouTube Channel
              Mountain Trekker, 39-year-old Varun Vagish, carries a dream of
              helping raise the bar for domestic tourism.
            </p>
            <p>
              <span className="travel-text">Travel </span>{" "}
              <span className="travel-date">/ August 21 2017</span>
            </p>
          </div>
        </div>

        <div className="latest-card">
          <img className="latest-card-img" src={f1} alt="" />
          <div className="latest-card-text">
            <span className="blog-heading">'Itchy Boots' tours SA</span>
            <p>
              Adventure biker 'Itchy Boots' tours SA, bringing her legions of
              fans along for the ride Dutchwoman Noraly Schoenmaker has spent
              years travelling the world solo on a motorbike, amassing a huge
              social-media following along the way
            </p>
            <p>
              <span className="travel-text">Travel </span>{" "}
              <span className="travel-date">/ August 21 2017</span>
            </p>
          </div>
        </div>

        <div className="latest-card">
          <img className="latest-card-img" src={t1} alt="" />
          <div className="latest-card-text">
            <span className="blog-heading">
              Traveling is also important for happy life
            </span>
            <p>
              there is paragraph detailing about current blog. There is
              something you don't know about it. But You should know about it.
            </p>
            <p>
              <span className="travel-text">Travel </span>{" "}
              <span className="travel-date">/ August 21 2017</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestSuggest;
