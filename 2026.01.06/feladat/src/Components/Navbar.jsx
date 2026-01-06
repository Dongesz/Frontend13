import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className='navbar-brand' to="/">Home</Link> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <Link class="nav-item m-2" to="/jatekosok"><li >Jatekosok</li></Link> 
          <Link class="nav-item m-2" to="/ujjatekos"><li >Uj Jatekos</li></Link> 
          </ul>
        </div>
      </nav>
  );
}
