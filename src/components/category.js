import { Component } from "react";
import Advertisement from "../components/advertisement";
import Posts from "./posts";
import List from "./list";
// import "../assets/SCSS/_category.scss";

class Catagory extends Component {
  render() {
    return (
      <div className="common-main-container">
        <div className="div-articles">
          <List />
        </div>
        <div className="div-advt">
          <Posts />
          <Advertisement />
        </div>
      </div>
    );
  }
}

export default Catagory;
