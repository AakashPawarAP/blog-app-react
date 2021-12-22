import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ImgPosts from "../assets/images/posts-img.jpg";

const Posts = (props) => {
  let latestPost = [
    {
      id: 1,
      img: ImgPosts,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catagory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 2,
      img: ImgPosts,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catagory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 3,
      img: ImgPosts,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catagory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 3,
      img: ImgPosts,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catagory: "Travel",
      date: "August 21 2017",
    },
  ];

  //   const { match } = props;
  //   const { catagory } = match.params;
  return (
    <div className="posts-container">
      <h2>Top Posts</h2>
      <div className="underline" />
      <div className="posts-content">
        <img src={ImgPosts} alt="posts img" className="main-img" />
        <div>
          <h3>Catch waves with an adventure guide</h3>
          <p>
            <span>Travel</span> / August 21 2017
          </p>
        </div>
        {latestPost.map((item, index) => {
          return (
            <>
              <hr />
              <div className="posts-flex-content" key={index}>
                <img src={item.img} alt="posts img" />
                <div>
                  <Link to={`/travel/${item.id}`}>
                    <h3>{item.heading}</h3>
                  </Link>
                  <p>
                    <span>{item.catagory}</span> / {item.date}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Posts);
