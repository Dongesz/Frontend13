import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

export default function Pizzak() {
    const [pizzas, setpizzas] = useState([])

    useEffect(() => {
        fetch('https://pizza.sulla.hu/pizza')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            setpizzas(data)
        })
        .then(() => {
            return pizzas;
        });
    }, [])
  return (
    <div className='row d-flex justify-content-center'>
        {
            pizzas.map((pizza) =>(
                <Card id={pizza.id} name={pizza.name} image_url={pizza.image_url} key={pizza.Index}/>
            ))
        }
    </div>
  )
}
