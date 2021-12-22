import { Component } from "react";
import Imgs from "./imgs";
import Latest from "./latest";
import Articles from "./articles";
import Advertisement from "./advertisement";
import Posts from "./posts";
// import "../assets/SCSS/_home.scss";
import Stories from "./stories";

export default function Home() {
  return (
    <div className="home-main-container">
      <Imgs />
      <Latest />
      <div className="div-container">
        <div className="div-articles">
          <Articles />
        </div>
        <div className="div-advt">
          <Advertisement />
          <Posts />
        </div>
      </div>
      <Stories />
    </div>
  );
}
