import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Posts from "./Pages/Admin/Posts/Posts";
import Ads from "./Pages/Admin/Ads/Ads";
import Categories from "./Pages/Admin/Categories/Categories";
import UpdatePost from "./Pages/Admin/UpdatePost/UpdatePost";
import NewPost from "./Pages/Admin/NewPost/NewPost";
import Home from "./Pages/Home/Home";
import Frontpage from "./Pages/Frontpage/Frontpage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import Search from "./Pages/Search/Search";
import Container from "./Components/Container/Container";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datetime/css/react-datetime.css";

import { SearchContext } from "./Pages/Contexts/Context";
import { LoginContext } from "./Pages/Contexts/Context";
import { IdContext } from "./Pages/Contexts/Context";

export default function App() {
  const [searchWord, setSearchWord] = useState("");
  const [idPost, setIdPost] = useState("");
  const [isLogged, setIsLogged] = useState(localStorage.getItem("logged"));

  return (
    <BrowserRouter>
      <Switch>
        <LoginContext.Provider value={{ isLogged, setIsLogged }}>
          <Switch>
            <PrivateRoute path="/admin/posts/new" component={NewPost} />
            <PrivateRoute path="/admin/updatepost/:id" component={UpdatePost} />
            <PrivateRoute path="/admin/posts" component={Posts} />
            <PrivateRoute path="/admin/categorias" component={Categories} />
            <PrivateRoute path="/admin/ads" component={Ads} />
            <Route exact path="/admin" component={Admin} />
            <SearchContext.Provider value={{ searchWord, setSearchWord }}>
              <IdContext.Provider value={{ idPost, setIdPost }}>
                <Container>
                  <Switch>
                    <Route path="/procurar" component={Search} />
                    <Route
                      path="/categories/:category"
                      component={CategoryPage}
                    />
                    <Route path="/:frontpage" component={Frontpage} />
                    <Route path="/" component={Home} />
                  </Switch>
                </Container>
              </IdContext.Provider>
            </SearchContext.Provider>
          </Switch>
        </LoginContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
