import { Component, useState } from "react";
import ImgArticle from "../assets/images/articles-img.jpg";
import { BsArrowDown } from "react-icons/bs";
import { Switch, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../assets/SCSS/_list.scss";

const List = (props) => {
  let list = [
    {
      id: 1,
      img: ImgArticle,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catgory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 2,
      img: ImgArticle,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catgory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 3,
      img: ImgArticle,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catgory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 4,
      img: ImgArticle,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catgory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 5,
      img: ImgArticle,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catgory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 6,
      img: ImgArticle,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catgory: "Travel",
      date: "August 21 2017",
    },
    {
      id: 7,
      img: ImgArticle,
      heading: "Catch waves with an adventure guide",
      desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
      catgory: "Travel",
      date: "August 21 2017",
    },
  ];

  // const[showBlog,setShowBlog]=useState(false);
  const { match } = props;
  const { catagory } = match.params;
  return (
    <div>
      <h2 style={{ textTransform: "capitalize" }}>{catagory}</h2>
      <div className="underline" />
      <div className="list-container">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <div className="list-flex-container">
                <img src={ImgArticle} alt="list img" />
                <div className="list-content">
                  <Link to={`/${catagory}/${item.id}`}>
                    <h3>{item.heading}</h3>
                  </Link>
                  <p>{item.desc}</p>
                  <br />
                  <p>
                    <span>{catagory}</span> / {item.date}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        <div className="more">
          <span>LOAD MORE</span>
          <BsArrowDown style={{ color: "red" }} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(List);
