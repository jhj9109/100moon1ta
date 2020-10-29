import React from "react";
// import './App.css';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';

// 공통 컴포넌트
import NavbarContainer from './containers/common/NavbarContainer';

// Page
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>100moon1ta</title>
      </Helmet>
      <NavbarContainer />
      <Switch>
        <Route component={MainPage} path="/" exact />
        <Route component={GamePage} path="/games/" exact />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </div>
  );
}

export default App;