import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

export default function Legends() {
    const [cars, setCar] = useState([])

    useEffect(() => {
      fetch('/cars.json')
      .then(res => res.json())
      .then(data => setCar(data))
    }, [])
    
  return (
    <div>
        <div className='row d-flex justify-content-center m-4'>
            {
                cars.map((car, index) => (
                    <Card key={index} car={car}/>
                ))
            }
        </div>
    </div>
  )
}
