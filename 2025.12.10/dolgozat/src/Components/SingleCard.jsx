import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function SingleCard({id, name, image_url}) {
    const [newName, setNewName] = useState("")    
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
      e.preventDefault();
  
      const newPizza = {
        name: newName,
        image_url: imageUrl
    };
     
        fetch("https://pizza.sulla.hu/pizza/" + id, {
            method: "PUT",
            body: JSON.stringify(newPizza),
            headers: {
                "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log("Siker:", data);
              setNewName("");
              setImageUrl("");
            })
            .catch(err => {
              console.error("Hiba:", err);
            });
        }
        function DeleteItem() {
            fetch("https://pizza.sulla.hu/pizza/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
              })
                .then(res => res.json())
                .then(data => {
                  console.log("Siker:", data);
                  setNewName("");
                  setImageUrl("");
                })
                .catch(err => {
                  console.error("Hiba:", err);
                });
                navigate('/pizzak');
        }
  return (
    <div class="card m-3" style={{width: "500px"}}>
        <img class="card-img-top img-fluid" style={{width: "500px", height: "500px"}} src={image_url}/>
        <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <div className='m-3'>
                <h4>Pizza frissitese: </h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">Pizza neve:</label><br/>
                    <input type="text" id="fname" name="fname" value={newName} onChange={e => setNewName(e.target.value)}/><br/>
                    <label htmlFor="lname">Image url:</label><br/>
                    <input type="text" id="lname" name="lname" value={imageUrl} onChange={e => setImageUrl(e.target.value)}/><br/><br/>
                    <input className='btn btn-success' type="submit" value="Frissítés"/>
                    <button class="btn btn-danger m-1" onClick={DeleteItem}>
                    <i class="bi bi-trash"></i>
                    </button>

                </form>
            </div>
            <Link to= {`/pizzak`}>
                <button className='btn btn-primary'><i class="bi bi-arrow-left"></i></button>
            </Link>
        </div>
    </div>
  )
}
