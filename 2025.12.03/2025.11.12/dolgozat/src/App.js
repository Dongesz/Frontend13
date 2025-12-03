import React, { useState } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [showRating, setShowRating] = useState(true);
  const [cardColor, setCardColor] = useState("#ffffff");

  const books = [
    {
      id: 1,
      title: "Hegyek Szíve",
      category: "Fantasy",
      rating: 5,
      img: "https://picsum.photos/200/300?random=1"
    },
    {
      id: 2,
      title: "A Sötétség Hangjai",
      category: "Horror",
      rating: 4,
      img: "https://picsum.photos/200/300?random=2"
    },
    {
      id: 3,
      title: "Örök Szerelem",
      category: "Romantikus",
      rating: 3,
      img: "https://picsum.photos/200/300?random=3"
    }
  ];

  const handleApply = (e) => {
    e.preventDefault(); // ne töltsön újra az oldal
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Könyvlista</h2>

      <form onSubmit={handleApply} className="mb-4 p-3 border rounded">

        <div className="form-check mb-3">
          <input 
            type="checkbox"
            className="form-check-input"
            checked={showRating}
            onChange={() => setShowRating(!showRating)}
          />
          <label className="form-check-label">
            Értékelés mutatása
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">Kártyák színe</label>
          <input 
            type="color"
            className="form-control form-control-color"
            value={cardColor}
            onChange={(e) => setCardColor(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Beállít</button>
      </form>


      <div className="d-flex gap-3 flex-wrap">
        {books.map(book => (
          <Card 
            key={book.id}
            title={book.title}
            category={book.category}
            rating={book.rating}
            img={book.img}
            showRating={showRating}
            cardColor={cardColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
