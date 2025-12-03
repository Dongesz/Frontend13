import React from 'react'
import Nav from './pages/components/Nav'
import Card from './pages/components/Card'

export default function Home() {

  let allatok = [
    {
      name: "Kutya",
      details: "Ez egy kutya",
      image: "https://www.grandopet.hu/upload_files/filemanager/fajtaleiras/mopsz/mopsz%201.jpg",
      wiki: "https://hu.wikipedia.org/wiki/Kutya"
    },
    {
      name: "Cica",
      details: "Ez egy cica",
      image: "https://media.tenor.com/N3qwkwoXDD0AAAAM/crunch-cat.gif",
      wiki: "https://hu.wikipedia.org/wiki/Macska"
    },
    {
      name: "Pápaszemes medve",
      details: "Ez egy nem AI pápaszemes medve",
      image: "https://allatvilag.cafeblog.hu/files/2017/05/papaszemesm-2B04.jpg ",
      wiki: "https://hu.wikipedia.org/wiki/P%C3%A1paszemes_medve"
    },
    {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },
        {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },    {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },    {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },    {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },    {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },    {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },    {
      name: "Papagáj",
      details: "Ez egy papagáj",
      image: "https://www.cbc.ca/kidsnews/images/Snowball_thumbnail.gif",
      wiki: "https://hu.wikipedia.org/wiki/Papag%C3%A1jf%C3%A9l%C3%A9k"
    },
  ]

  return (
    <div>
      <Nav />
      <hr />
      <div class='row d-flex justify-content-center'>
        <Card title={allatok[0].name} text={allatok[0].details} image={allatok[0].image} link={allatok[0].wiki} />
        <Card title={allatok[1].name} text={allatok[1].details} image={allatok[1].image} link={allatok[1].wiki} />
        <Card title={allatok[2].name} text={allatok[2].details} image={allatok[2].image} link={allatok[2].wiki} />
        <Card title={allatok[3].name} text={allatok[3].details} image={allatok[3].image} link={allatok[3].wiki} />

        {
          allatok.map(function(allat) {
            return <Card title={allat.name} text={allat.details} image={allat.image} link={allat.wiki} />
          })
        }

      </div>

    </div>
  )
}
