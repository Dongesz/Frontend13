import './App.css';
import Card from './Components/Card';

function App() {
  var books = [
    {
      id : 1,
      title: "Harry Potter es az Azkabani Fogoly",
      text: "For Harry Potter, it’s the start of another far-from-ordinary year at Hogwarts when the Knight Bus crashes through the darkness and comes to an abrupt halt in front of him.",
      image: "https://s06.static.libri.hu/cover/c0/6/684283_4.jpg"
    },
    {
      id : 2,
      title: "Harry Potter és a bölcsek köve",
      text: "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.",
      image: "https://s04.static.libri.hu/cover/b6/f/716048_4.jpg"
    },
    {
      id : 3,
      title: "Harry Potter és a Félvér Herceg",
      text: "One summer night, when Dumbledore arrives at Privet Drive to collect Harry Potter, his wand hand is blackened and shriveled, but he will not reveal why.",
      image: "https://s02.static.libri.hu/cover/d8/e/716068_4.jpg"
    },
  ]
  return (
    <div className="App row justify-content-center m-3">
      {books.map(x =>
        <Card id = {x.id} title={x.title} text={x.text} image={x.image}/>
      )}
    </div>
  );
}

export default App;
