import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Player from './Components/Player';
import SinglePlayer from './Components/SinglePlayer';
import NewPlayer from './Components/NewPlayer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jatekosok" element={<Player />} />
        <Route path="/jatekos/:id" element={<SinglePlayer />} />
        <Route path="/ujjatekos" element={<NewPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
