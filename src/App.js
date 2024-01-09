import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
