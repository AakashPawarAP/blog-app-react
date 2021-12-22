import { Component } from "react";
import Navigation from "./navigation";
import Home from "./home";
import { Route, Switch } from "react-router-dom";
import Catagory from "./category";
import Blog from "./blog";
import Register from "./register";
import Author from "./author";

class Main extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" eaxct>
            <Register />
          </Route>
          <Route path="/:catagory" exact>
            <Catagory />
          </Route>
          <Route path="/:catagory/:id" eaxct>
            <Blog />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
