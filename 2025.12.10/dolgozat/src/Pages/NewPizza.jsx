import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NewPizza() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const newPizza = {
        name: name,
        image_url: imageUrl
      };
     
        fetch("https://pizza.sulla.hu/pizza", {
            method: "POST",
            body: JSON.stringify(newPizza),
            headers: {
                "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log("Siker:", data);
              setName("");
              setImageUrl("");
            })
            .catch(err => {
              console.error("Hiba:", err);
            });
      
      
    }
  return (
    <div className='d-flex justify-content-center align-items-center  align-items-center'>
        <div class="card m-3" style={{width: "500px"}}>
            <div class="card-body">
                <div className='m-3'>
                    <h2 className='m-3'>Új pizza adatai:</h2>
                    <form onSubmit={handleSubmit}>
                        <label for="fname">Pizza neve:</label><br/>
                        <input type="text" id="fname" name="fname" value={name} onChange={e => setName(e.target.value)}/><br/>
                        <label for="lname" >Image url:</label><br/>
                        <input type="text" id="lname" name="lname" value={imageUrl} onChange={e => setImageUrl(e.target.value)}/><br/><br/>
                        <input className='btn btn-success' type="submit" value="Feltöltés"/>
                    </form>
                </div>
                <Link to= {`/`}>
                    <button className='btn btn-primary'><i class="bi bi-arrow-left"></i></button>
                </Link>
            </div>
        </div>
    </div>
   
  )
}
