import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

const HatsPage = () => (
  <div>
    <h1>
      HatsPage
    </h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/hats' component ={HatsPage} />
      <Route exact path = '/shop' component ={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;
