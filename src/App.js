import './App.css';
import React from 'react';
import { HomePage, ShopPage, SignInAndSignUpPage } from './containers'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/signin' element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
