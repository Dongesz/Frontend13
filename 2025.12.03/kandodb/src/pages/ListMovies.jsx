import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { BarLoader } from 'react-spinners'

export default function ListMovies({bgColor, border}) {

  const [movies, setMovies] = useState([])    
  const [isPending, setIsPending] = useState(true) 

  useEffect(() => {
    fetch('/Books.json')
      .then(res => res.json())
      .then(data => {
        setMovies(data.movies)
        setIsPending(false)
      })
      .catch(err => {
        console.error("Hiba történt:", err)
        setIsPending(false)
      })
  }, [])

  return (
    <div>
      {
        isPending ? (
          <BarLoader 
            style={{margin: "20px", display: "block"}} 
            color={bgColor} 
            size={10}
          />
        ) : (
          <div className='row'>
            {
              movies.map((movie, index) => (
                <Card 
                  key={index}
                  bgColor={bgColor} 
                  border={border} 
                  item={movie} 
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}