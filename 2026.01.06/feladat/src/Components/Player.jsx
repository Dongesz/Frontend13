import React, { useEffect, useState } from 'react'

export default function Player() {
    const [player, setPlayer] = useState([])

    useEffect(() => {
        fetch("https://darts.sulla.hu/darts")
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, [])
   
  return (
    <div>
        

    </div>
  )
}
