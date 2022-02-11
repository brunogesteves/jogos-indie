import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Posts from "./Pages/Admin/Posts";
import Ads from "./Pages/Admin/Ads/Ads";
import Categories from "./Pages/Admin/Categories";
import UpdatePost from "./Pages/Admin/UpdatePost";
import NewPost from "./Pages/Admin/NewPost";
import Login from "./Pages/Admin/Login";
import Home from "./Pages/Home";
import Frontpage from "./Pages/Frontpage";
import CategoryPage from "./Pages/CategoryPage/";
import Search from "./Pages/Search";
import PrivateRoute from "./Components/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datetime/css/react-datetime.css";

export default function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <PrivateRoute path="/admin/posts/new" component={NewPost} />
          <PrivateRoute path="/admin/updatepost/:id" component={UpdatePost} />
          <PrivateRoute path="/admin/posts" component={Posts} />
          <PrivateRoute path="/admin/categorias" component={Categories} />
          <PrivateRoute path="/admin/ads" component={Ads} />
          <Route path="/admin/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/procurar" component={Search} />
          <Route path="/categories/:category" component={CategoryPage} />
          <Route path="/:frontpage" component={Frontpage} />
          <Route path="/" component={Home} />
        </Switch>
      </Switch>
    </BrowserRouter>
  );
}
