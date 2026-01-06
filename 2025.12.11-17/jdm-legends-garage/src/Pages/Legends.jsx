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
        <div className='row d-flex justify-content-center ms-5 me-5 mt-1'>
          <h1 className='d-flex justify-content-center mb-4'>My favourite JDM cars</h1>
            {
                cars.map((car, index) => (
                    <Card key={index} car={car}/>
                ))
            }
        </div>
    </div>
  )
}
