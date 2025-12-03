import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListMovies from './pages/ListMovies';
import ListUsers from './pages/ListUsers';
import Settings from './pages/Settings';
import SingleUsers from './pages/SingleUsers';

function App() {

  const [bgColor, setBgColor] = useState("grey");
  const [border, setBorder] = useState("");

  // Belépett-e a felhasználó?
  let isLoggedIn = true;

  return (
    <BrowserRouter>
    <div className="App">

      <NavBar/>

      {
        !isLoggedIn ? (
          <div className='error'>Figyelem! Nem vagy bejelentkezve!</div>
        ) : (
          null
        )
      }

      {
        !isLoggedIn && (
          <div className='warning'>Figyelem! Nem vagy bejelentkezve! (más módszer)</div>
        )
      }

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/filmek' element={<ListMovies bgColor={bgColor} border={border}/>} />
        <Route path='/felhasznalok' element={<ListUsers bgColor={bgColor} border={border}/>} />
        <Route path='/beallitasok' element={<Settings setBgColor={setBgColor} setBorder={setBorder}/>} />
        <Route path='/felhasznalo/:id' element={<SingleUsers bgColor={bgColor} border={border}/>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
