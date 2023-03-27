import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./Pages/Admin/Posts/Posts.view";
import Ads from "./Pages/Admin/Ads/Ads.view";
import Categories from "./Pages/Admin/Categories/Categories.view";
import UpdatePost from "./Pages/Admin/UpdatePost";
import NewPost from "./Pages/Admin/NewPost/NewPost.view";
import Login from "./Pages/Admin/Login/Login.view";
import Home from "./Pages/Home";
import Post from "./Pages/post";
import CategoryPage from "./Pages/CategoryPage";
import NotFoundPage from "./Pages/ErrorPage/ErrorPage.view";
import Search from "./Pages/Search/Search.view";
import PrivateRoute from "./components/PrivateRoute";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route path="/admin/posts/new" component={NewPost} />
          {/* <PrivateRoute path="/admin/updatepost/:id" component={UpdatePost} /> */}
          <Route path="/admin/categories" component={Categories} />
          <Route path="/admin/ads" component={Ads} />
          <Route path="/admin" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/procurar" component={Search} />
          {/* <Route path="/categories/:category" component={CategoryPage} /> */}
          <Route path="/:post" component={Post} />
          <Route path="/" component={Home} />
        </Switch>
      </Switch>
    </BrowserRouter>
  );
}
