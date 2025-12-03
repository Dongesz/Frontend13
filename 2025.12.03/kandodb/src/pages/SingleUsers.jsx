import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

export default function SingleUsers(bgColor, border) {
    
    const [isPending, setIsPending] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState(false)

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setError(true)
        setIsPending(true)
        GetUser()

    }, [])

    function GetUser() {
        fetch("https://jsonplaceholder.typicode.com/users/" + params.id)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                setUser(data);
                setIsPending(false)
            })
            .catch(function (error) {
                setError(true)
                setIsPending(false)
            })
    }

    function DeleteUser(){
        fetch("https://jsonplaceholder.typicode.com/users/" + params.id , {method: "DELETE"})
        .then(function(response){
            console.log(response);
            navigate("/felhasznalok");
        }).catch(function(error){
            console.error(error)
        })
    }

  return (
    <>
    
        {
            isPending ? (
                <BarLoader 
                style={{margin: "20px", display: "block"}} 
                color= "#3b82f6" 
                size={10}
                />
            ) : (

                    <div class="card p-3" style={{ width: "18rem", margin: "20px", backgroundColor: bgColor, border: border ? "solid 2px black" : "" }}>
                    <div class="card-body">
                        <h5 class="card-title">{user.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Email cím: {user.email}</li>
                        <li class="list-group-item">Telefon: {user.phone}</li>
                        <li class="list-group-item">
                            <a href={`https://www.${user.website}`} target='_blank'>{user.website}</a>
                        </li>
                        <li class="list-group-item">utca: {user.address?.street}</li>
                        <li class="list-group-item">hazszam: {user.address?.suite}</li>
                        <li class="list-group-item">iranyitoszam: {user.address?.zipcode}</li>
                        <li class="list-group-item">varos: {user.address?.city}</li>
                        <li class="list-group-item">ceg nev: {user.company?.name}</li>
                        <div className='row'>
                        <Link className='m-1'>
                        <button className='btn btn-danger'><i class="bi bi-trash3" onClick={DeleteUser}></i></button>
                        </Link>
                    
                       <Link className='m-1' to="/felhasznalok/">
                       <button className='btn btn-secondary'><i class="bi bi-arrow-left"></i></button>
                       </Link>
                        </div>
                       
                    </ul>
                </div>  
                )
        }

    </>
  )}
