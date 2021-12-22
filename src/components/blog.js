import { Component } from "react";
// import "../assets/SCSS/_blog.scss";
import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Clap from "../assets/images/clap.png";
import Share from "../assets/images/share.png";
import Author from "./author";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import More from "./more";

class Blog extends Component {
  render() {
    return (
      <>
        <div className="blog-container">
          <div className="icons">
            <div>
              <img src={Clap} alt="clap-img" />
              <span>9.3K claps</span>
            </div>
            <br />
            <br />
            <div>
              <img src={Share} alt="clap-img" />
              <span>share this article</span>
            </div>
          </div>
          <h2>5 Ways to animate a React app</h2>
          <hr />
          <div className="author-info">
            <Author />
            <div className="author-social-links">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaYoutubeSquare />
            </div>
          </div>
          <hr />
          <img src={Blog1} alt="blog-img" />
          <p>
            Animation in ReactJs app is a popular topic and there are many ways
            to create different types of animations.Many developers create
            animation exclusively using css and adding classes to HTML tags.
            This is a great way and you should use it. If you want to create
            complex animations you can pay attention to GreenSock. GreenSock is
            the most powerful animation platform. There are also a lot of
            libraries, components for creating animation in React. Let’s talk
            about them
          </p>
          <img src={Blog2} alt="blog-img" />
          <div className="blog-subcontainer">
            <span>React</span>
            <span>JavaScript</span>
            <span>Animation</span>
            <br />
            <div>
              <img src={Clap} alt="clap-img" />
              <span>9.3K claps</span>
            </div>
          </div>
        </div>
        <More />
      </>
    );
  }
}

export default Blog;
