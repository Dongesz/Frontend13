import React from "react";

function Card({ title, category, img, rating,  cardColor, cardborder, select}) {
  let border = ""
  if(cardborder)
    {
      border = "2px solid black"
    }

    if(select === "title") {
      return (
        <div className="card p-3 mb-3" style={{ backgroundColor: cardColor, width: "18rem", border: border}}>
          <img src={img} className="card-img-top" alt={title} />
    
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          
          </div>
        </div>
      );
    } else if (select === "rating") {
      return (
        <div className="card p-3 mb-3" style={{ backgroundColor: cardColor, width: "18rem", border: border}}>
          <img src={img} className="card-img-top" alt={title} />
    
          <div className="card-body">
          <p className="card-text">Értékelés: {rating}/5</p>
          
          </div>
        </div>
      );
    } else {
      return (
        <div className="card p-3 mb-3" style={{ backgroundColor: cardColor, width: "18rem", border: border}}>
          <img src={img} className="card-img-top" alt={title} />
    
          <div className="card-body">
          <p className="card-text">
          {category}
        </p>
          
          </div>
        </div>
      );
    }
}

export default Card;