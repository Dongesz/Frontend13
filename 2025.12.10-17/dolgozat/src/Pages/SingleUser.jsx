import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import { useParams } from 'react-router-dom';
import SingleCard from '../Components/SingleCard';

export default function SingleUser() {

    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        GetUser()

    }, [params.id])

    function GetUser() {
        fetch("https://pizza.sulla.hu/pizza/" + params.id)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                setUser(data);
            })
    }
  return (
    <div className='d-flex justify-content-center'>
        <SingleCard id={user.id} name={user.name} image_url={user.image_url} key={user.Index} />
    </div>
  )
}
