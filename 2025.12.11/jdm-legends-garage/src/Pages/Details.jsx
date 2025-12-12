import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const [cars, setCars] = useState({})
    const params = useParams();
    useEffect(() => {
      fetch('/cars.json')
      .then(res => res.json())
      .then(data => setCars(data))

    }, [])

    const car = car => car.id === params.id
  return (
        <div>
            <Details car={car}/>
        </div>
    )
}
