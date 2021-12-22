import { Component } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/images/latest-img.jpg";
// import "../assets/SCSS/_latest.scss";

class Latest extends Component {
  render() {
    let latestBlog = [
      {
        id: 1,
        heading: "Joshua Tree Overnight Adventure",
        desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces.",
        catagory: "Travel",
        date: "August 21 2017",
      },
      {
        id: 2,
        heading: "Joshua Tree Overnight Adventure",
        desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces.",
        catagory: "Travel",
        date: "August 21 2017",
      },
      {
        id: 3,
        heading: "Joshua Tree Overnight Adventure",
        desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces.",
        catagory: "Travel",
        date: "August 21 2017",
      },
    ];
    return (
      <div className="latest-container">
        <h2>The Latest</h2>
        <div className="underline"></div>
        <div className="latest-flex-container">
          {latestBlog.map((item, index) => {
            return (
              <div className="latest-flex-subcontainer" key={index}>
                <img src={Img} alt="image1"></img>
                <div className="latest-content">
                  <Link to={`travel/${item.id}`}>
                    <h3>{item.heading}</h3>
                  </Link>
                  <p>{item.desc}</p>
                  <br />
                  <p>
                    <span>{item.catagory}</span> / {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Latest;
