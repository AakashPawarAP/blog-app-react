import { Component } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

class Stories extends Component {
  render() {
    let stories = [
      {
        id: 1,
        heading: "Catch waves with an adventure guide",
        desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",
        catagory: "Travel",
        date: "August 21 2017",
      },
      {
        id: 2,
        heading: "Catch waves with an adventure guide",
        desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",
        catagory: "Travel",
        date: "August 21 2017",
      },
      {
        id: 3,
        heading: "Catch waves with an adventure guide",
        desc: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",
        catagory: "Travel",
        date: "August 21 2017",
      },
    ];
    return (
      <div className="stories-main-container">
        <h2>Latest Stories</h2>
        <div className="underline" />
        <hr />
        <div className="stories-flex-container">
          {stories.map((item, index) => {
            return (
              <div className="stories-flex-subcontainer" key={index}>
                <Link to={`/travel/${item.id}`}>
                  <h3>{item.heading}</h3>
                </Link>
                <p>{item.desc}</p>
                <br />
                <p>
                  <span>{item.catagory}</span> / {item.date}
                </p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="more">
          <span>VIEW MORE</span>
          <BsArrowDown style={{ color: "red" }} />
        </div>
      </div>
    );
  }
}

export default Stories;
