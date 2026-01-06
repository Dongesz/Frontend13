import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Legends from './Pages/Legends';
import Navbar from './Components/Navbar';
import Details from './Pages/Details';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/legends' element={<Legends />}/>
          <Route path='/legends/:id' element={<Details />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
