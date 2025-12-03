import { useState } from "react";


export default function Settings({setBgColor, setBorder}) {

  const [success, setSuccess] = useState(false)

  function cardSubmit(e) {
    e.preventDefault();

    //1 adatok kiszedése
    let formData = {
      bgColor: document.getElementById("bgColor").value,
      isBorder: document.getElementById("border").checked
    }

    //2 setterek beállítása
    setBgColor(formData.bgColor);
    setBorder(formData.isBorder);
    setSuccess(true);
  }


  return (
    <div>
      <h1>Kártyák beállításai</h1>
      <form id="cardSettings" onSubmit={cardSubmit}>
        <label>Háttérszín</label><br />
        <input type="color" name="bgColor" id="bgColor" /><br />
        <label>Keret legyen-e?</label><br />
        <input type="checkbox" name="border" id="border" defaultChecked/><br />
        <button type="submit">Beállít</button>
      </form>
      {
        success && (
          <div className="success">Sikeres módosítás!</div>
        )
      }
    </div>
  )
}
