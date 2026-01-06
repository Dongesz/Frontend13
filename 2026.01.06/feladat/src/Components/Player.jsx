import { useEffect, useState } from 'react';
import Card from './Card';

export default function Player() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://darts.sulla.hu/darts")
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div  className='row d-flex justify-content-center m-5'>
      {players.map(p =>
        <Card
          key={p.id}
          id={p.id}
          name={p.name}
          image_url={p.image_url}
        />
      )}
    </div>
  );
}
