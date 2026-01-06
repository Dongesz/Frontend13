import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Player from './Components/Player';
import NewPlayer from './Components/NewPlayer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
      </div>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/jatekosok' element={<Player/> }/>
          <Route path='/ujjatekos' element={<NewPlayer/> }/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
