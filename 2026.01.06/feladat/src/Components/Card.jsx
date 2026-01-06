import { Link } from 'react-router-dom';

export default function Card({ id, name, image_url }) {
  return (
    <div className="card m-2 d-flex flex-column align-items-center" style={{ width: "400px" }}>
  <img src={image_url} style={{width: "70%", height: "70%"}} className="card-img-top m-3" alt={name} />
  <div className="card-body d-flex flex-column align-items-center">
    <h5 className="card-title">{name}</h5>
    <Link to={`/jatekos/${id}`} className="btn btn-success">
      <i className="bi bi-three-dots"></i>
    </Link>
  </div>
</div>

  );
}
