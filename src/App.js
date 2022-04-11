import './App.css';
import { HomePage, ShopPage } from './containers'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/shop' element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
