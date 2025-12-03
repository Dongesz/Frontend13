import React from "react";

function Card({ title, category, img, rating, showRating, cardColor }) {
  return (
    <div 
      className="card p-3 mb-3" 
      style={{ backgroundColor: cardColor, width: "18rem" }}
    >
      <img src={img} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          Kategória: {category}
        </p>

  
        {showRating && (
          <p className="card-text">Értékelés: {rating}/5</p>
        )}
      </div>
    </div>
  );
}

export default Card;
