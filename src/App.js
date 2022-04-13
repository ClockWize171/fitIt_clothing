import './App.css';
import React from 'react';
import { HomePage, ShopPage, SignInAndSignUpPage } from './containers'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from "firebase/firestore";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
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
