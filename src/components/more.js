import React, { Component } from "react";
import Author from "./author";
import Img from "../assets/images/latest-img.jpg";

export default class More extends Component {
  render() {
    return (
      <div className="more-container">
        <p>More From The Siren</p>
        <hr />
        <div className="more-flex-container">
          <div>
            <img className="more-img" src={Img} alt="image1" />
            <h3>Joshua Tree Overnight Adventure</h3>
            <Author />
          </div>
          <div>
            <img className="more-img" src={Img} alt="image1" />
            <h3>Joshua Tree Overnight Adventure</h3>
            <Author />
          </div>
          <div>
            <img className="more-img" src={Img} alt="image1" />
            <h3>Joshua Tree Overnight Adventure</h3>
            <Author />
          </div>
        </div>
      </div>
    );
  }
}
