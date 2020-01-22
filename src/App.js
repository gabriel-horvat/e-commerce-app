import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const {currentUser} = this.state
    return (
    <div className="App">
      <Header currentUser = {currentUser} />
      <Switch>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/shop' component ={ShopPage} />
      <Route exact path = '/signin' component ={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}
}

export default App;
