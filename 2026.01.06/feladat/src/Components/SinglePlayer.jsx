import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://darts.sulla.hu/darts/" + id)
      .then(res => res.json())
      .then(data => setPlayer(data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      <div className="card d-flex flex-column align-items-center" style={{ width: "400px" }}>
        <img src={player.image_url} className="card-img-top m-2" alt={player.name} />
        <div className="card-body">
          <h4>{player.name}</h4>
          <p>Született: {player.birth_date}</p>
          <p>VB címek: {player.world_ch_won}</p>
          <a href={player.profile_url} target="_blank" rel="noreferrer">
            Wikipédia
          </a>
          <br /><br />
          <button className="btn btn-primary" onClick={() => navigate("/jatekosok")}>
            <i class="bi bi-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
