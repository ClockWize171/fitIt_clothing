import './App.css';
import { HomePage } from './containers'
import { Route, Routes } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>Hatpages</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/shop/hats' element={<HatsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
