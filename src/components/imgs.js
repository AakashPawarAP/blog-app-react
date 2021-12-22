import { Component } from "react";
import { Link } from "react-router-dom";
// import "../assets/SCSS/_imgs.scss";

class Imgs extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-item item1">
          <Link to="/travel/1">
            <h2>
              SPIDER-MAN: NO WAY HOME's leaks confirm its biggest crossover
              characters
            </h2>
          </Link>
          <p>Hollywood / Dec 01 2021 </p>
        </div>
        <div className="grid-item item2">
          <Link to="/travel/2">
            <h2>The sound cloud you loved is doomed</h2>
          </Link>
          <p>Travel / August 21 2017</p>
        </div>
        <div className="grid-item item3">
          <Link to="/travel/3">
            <h2>The sound cloud you loved is doomed</h2>
          </Link>
          <p>Travel / August 21 2017</p>
        </div>
      </div>
    );
  }
}

export default Imgs;
