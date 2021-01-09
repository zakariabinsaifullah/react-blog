import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
// import { withRouter } from "react-router";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import CreateArticle from './Components/CreateArticle';
import SingleArticle from './Components/SingleArticle';
import Login from './Components/Login';
import Register from './Components/Register';

const Main = withRouter( ({ location }) => {
  return(
    <div>
      {
        location.pathname !== '/login' && location.pathname !== '/register' &&
        <Navbar />
      }
        <Route exact path="/" component={ Welcome } />
        <Route path="/articles/create" component={ CreateArticle } />
        <Route path="/article/:slug" component={ SingleArticle } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
      {
        location.pathname !== '/login' && location.pathname !== '/register' &&
        <Footer />
      }
    </div>
  )
})

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);

