import React, { useState, useEffect } from "react";
import img1 from "../images/home/latest-article/img1.jpg";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Category(prop) {
  let [loadMore, setLoadMore] = useState(3);
  let [blogs, setBlogs] = useState([]);

  const currentPage = prop.match.params.cat;

  useEffect(() => {
    // const url = "http://localhost:8000/api/v1/blogs/";

    const url = "https://blog-app--backend.herokuapp.com/api/v1/blogs/";
    // http: localhost: 8000 /

    axios
      .post(url, {
        currentPage,
      })
      .then((res) => {
        if (res.data.length > 0) {
          setBlogs(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const load = () => {
    setLoadMore((loadMore) => {
      return loadMore + 2;
    });
  };

  const path = prop.history.location.pathname;

  const blogDesc = (id, blogObj) => {
    prop.history.push(path + "/blog/" + id, blogObj);
  };

  return (
    <div className="cat-main">
      <div className="category-container">
        {/* return <p key={ind}>{val.blogHead}</p> */}
        <div className="left-child-category">
          <span className="category-heading">
            <span>{currentPage}</span>
          </span>
          {/* {blogData[currentPage].map((val, ind) => { */}
          {blogs.map((val, ind) => {
            if (ind >= loadMore) {
              return null;
            }
            return (
              <div
                onClick={() => {
                  blogDesc(ind, val);
                }}
                key={ind}
                className="category-card"
              >
                <img
                  className="category-card-img"
                  src={val.img}
                  alt="categoryimage"
                />
                <div className="category-card-text-container">
                  <span className="category-blog-heading">{val.blogHead}</span>
                  <p className="category-blog-desc">{val.blogDesc}</p>
                  <p>
                    <span className="category-travel">{val.type}</span>
                    <span className="category-date">{val.date}</span>
                  </p>
                </div>
              </div>
            );
          })}
          <h3 className="load-more-cat" onClick={load}>
            Load more &#8595;
          </h3>
        </div>

        <div className="right-child-category">
          <span>
            <span className="category-heading">
              {" "}
              <span>Top</span> Posts
            </span>
          </span>
          <div>
            <img
              className="category-card-img-right"
              src={img1}
              alt="categoryimage"
            />
          </div>

          <div className="right-card-text-category">
            <span className="category-blog-heading-right">
              Catch waves with adventure guide
            </span>
            <p>
              Gujarat is vastly underrated and it's a mystery the region is'nt{" "}
              <br />a mystery the region is'nt more well
            </p>
            <p>
              <span className="category-travel">Travel</span>
              <span className="category-date">/ August 21 2021</span>
            </p>
          </div>

          <div className="category-card-right">
            <img
              className="category-card-img-right-card"
              src={img1}
              alt="categoryimage"
            />
            <div className="category-card-text-container">
              <span className="category-blog-heading-right-card">
                Catch waves with adventure guide
              </span>
              <p>
                Gujarat is vastly underrated and it's a mystery the region is'nt{" "}
                <br />a mystery the region is'nt more well
              </p>
              <p>
                <span className="category-travel">Travel</span>
                <span className="category-date">/ August 21 2021</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Category);
