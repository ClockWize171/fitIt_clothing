import './App.css';
import { HomePage, ShopPage } from './containers'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/shop' element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
