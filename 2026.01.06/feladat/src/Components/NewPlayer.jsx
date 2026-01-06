import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPlayer() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [worldChWon, setWorldChWon] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newPlayer = {
      name: name,
      birth_date: birthDate,
      world_ch_won: Number(worldChWon),
      profile_url: profileUrl,
      image_url: imageUrl
    };

    fetch("https://darts.sulla.hu/darts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer)
    })
      .then(res => res.json())
      .then(() => {
        alert("Játékos sikeresen felvéve!");
        setTimeout(() => navigate("/jatekosok"), 2000);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='m-1 d-flex flex-column align-items-center'>
      <form className="m-3" onSubmit={handleSubmit}>
        <input className="form-control m-1" placeholder="Név"
          value={name} onChange={e => setName(e.target.value)} />
        <input className="form-control m-1" type="date"
          value={birthDate} onChange={e => setBirthDate(e.target.value)} />
        <input className="form-control m-1" placeholder="VB címek száma"
          value={worldChWon} onChange={e => setWorldChWon(e.target.value)} />
        <input className="form-control m-1" placeholder="Profil URL"
          value={profileUrl} onChange={e => setProfileUrl(e.target.value)} />
        <input className="form-control m-1" placeholder="Kép URL"
          value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        <button className="btn btn-success">Felvitel</button>
      </form>
    </div>
    
  );
}
