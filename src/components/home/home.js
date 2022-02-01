import React, { Component } from "react";
// import "./home.css";
import Latest from "./latest";
import TopPosts from "./topPosts";
import Articles from "../../context/articleContext/articleContext";
import LatestArticle from "./latestArticle";
import { withRouter } from "react-router-dom";

class Home extends Component {
  pushPath(path) {
    this.props.history.push(path);
  }

  render() {
    // console.log(localStorage.getItem("login"));
    // console.log("hii inside render");

    return (
      <>
        {localStorage.getItem("login") !== "true" ? (
          this.props.history.push("/")
        ) : (
          <>
            <div className="card-container">
              <div onClick={() => this.pushPath("/post1")} className="div1">
                <h1>
                  SPIDER-MAN: NO WAY HOME's leaks confirm its biggest crossover
                  characters
                </h1>
                <span>Travel / 12 july 2021</span>
              </div>

              <div className="div2">
                <div onClick={() => this.pushPath("/post2")} className="cdiv1">
                  <h2>The sound cloud You loved is doomed</h2>
                  <span>Travel / april 12 2013</span>
                </div>
                <div onClick={() => this.pushPath("/post3")} className="cdiv2">
                  <h2>The sound cloud You loved is doomed</h2>
                  <span>Travel / april 12 2013</span>
                </div>
              </div>
            </div>

            <Latest />
            <Articles>
              <LatestArticle />
            </Articles>

            <TopPosts />
          </>
        )}
      </>
    );
  }
}

export default withRouter(Home);
