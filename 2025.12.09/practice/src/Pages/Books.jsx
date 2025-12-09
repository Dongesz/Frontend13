import React, { useEffect ,useState  } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import Details from '../Components/Details'

export default function Books({color, setcolor}) {
  const [books, setbooks] = useState([])
  useEffect(() => {
    fetch('/books.json')
      .then(res => res.json())
      .then(data => {
        setbooks(data)
      })
      .catch(err => {
        console.log("Hiba történt:", err)
      })
  }, [])
  return (
    <div className='row m-3 d-flex justify-content-center'>
    {
      books.map((book, index) => (
          <Card key={index} item={book} color={color} />
      ))
    }
    <Details setcolor={setcolor} color={color}/>
    {<Link to={"/"}>Home</Link>}
    </div>
  )
}
