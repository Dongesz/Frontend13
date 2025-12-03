import { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'
import UserCard from '../components/UserCard';

export default function ListUsers({ bgColor, border }) {

    // GET kérésre várakozás useState-je
    const [isPending, setIsPending] = useState(false);
    // Felhasználók
    const [users, setUsers] = useState([]);
    // Volt-e hiba
    const [error, setError] = useState(false)

    // useEffect miatt a GET csak 1-szer fut
    useEffect(() => {
        setError(false)
        setIsPending(true)
        GetUsers()

    }, [])

    // A GET függvény személyesen
    function GetUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                setUsers(data);
                setIsPending(false)
            })
            .catch(function (error) {
                setError(true)
                setIsPending(false)
            })
    }

    return (
        <div>

            {/* Itt eldől, hogy Spinner jelenik-e meg vagy a kártyák */}
            {
                isPending ? (
                    <BarLoader style={{ margin: "20px", display: "block" }} size={10} color={bgColor} />
                ) : (
                    <div className='row'>
                        {
                            users.map((user) => (
                                <UserCard bgColor={bgColor} border={border} item={user} />
                            )
                            )
                        }


                        {/* <Card bgColor={bgColor} border={border} movie={movies[0]} />
                            <Card bgColor={bgColor} border={border} movie={movies[1]} />
                            <Card bgColor={bgColor} border={border} movie={movies[2]} /> */}
                    </div>
                )
            }

            {/* Itt eldől, hogy jelenjen-e meg hibaüzenet */}
            {
                error && (
                    <p className='error'>Hiba az adatok lekérése során</p>
                )
            }

        </div>
    )
}
