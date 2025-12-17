import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pizzak from './Pages/Pizzak';
import SingleUser from './Pages/SingleUser';
import NewPizza from './Pages/NewPizza';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Pizzak' element={<Pizzak/>}></Route>
            <Route path='/felhasznalo/:id' element={<SingleUser/>} />
            <Route path='/Ujpizza' element={<NewPizza/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
