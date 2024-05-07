// App.js

import Login from './components/Login';
import Register from './components/Register';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Logout from './components/Logout';
import Map from './components/Map';
import './styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/map" component={Map} />
          {isLoggedIn && (
            <>
              <Route path="/create" component={CreatePost} />
              <Route path="/edit/:id" component={EditPost} />
              <Route path="/posts" component={Posts} />
            </>
          )}
          <Route path="/" component={Posts} />
        </Switch>
        <div className="background-image"></div> {/* Add this div for the background image */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;