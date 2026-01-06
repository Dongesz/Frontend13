import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="m-3 d-flex flex-column align-items-center">
      <h2 className='mt-5'>Darts feladat weboldal</h2>
      <Link to="/jatekosok" className="btn btn-primary">Tovább a játékosokhoz
      </Link>
    </div>
  );
}
