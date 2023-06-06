import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Posts from './Pages/Admin/Posts/Posts.view';
import Ads from './Pages/Admin/Ads/Ads.view';
import Categories from './Pages/Admin/Categories/Categories.view';
import UpdatePost from './Pages/Admin/UpdatePost/UpdatePost.view';
import NewPost from './Pages/Admin/NewPost/NewPost.view';
import Login from './Pages/Admin/Login/Login.view';
import Home from './Pages/Home/Home.view';
import Post from './Pages/Post/Post.view';
import CategoryPage from './Pages/CategoryPage/CategoryPage.view';
import Search from './Pages/Search/Search.view';
import PrivateRoute from './components/PrivateRoute';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'tw-elements';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <PrivateRoute path="/admin/posts/newpost" component={NewPost} />
          <PrivateRoute path="/admin/updatepost/:id" component={UpdatePost} />
          <PrivateRoute path="/admin/categories" component={Categories} />
          <PrivateRoute path="/admin/ads" component={Ads} />
          <PrivateRoute path="/admin" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/procurar" component={Search} />
          <Route path="/categories/:category" component={CategoryPage} />
          <Route path="/:slug" component={Post} />
          <Route path="/" component={Home} />
        </Switch>
      </Switch>
    </BrowserRouter>
  );
}
