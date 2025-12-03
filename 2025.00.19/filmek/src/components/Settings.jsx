import React from 'react'

export default function Settings({cardColor, handleApply, setCardColor, setCardBorder, setSelected}) {

  

  return (
    <form onSubmit={handleApply} className="mb-4 p-3 border rounded">
      
    <div className="mb-3">
      <label className="form-label">Kártyák színe</label>
      <input 
        type="color"
        className="form-control form-control-color"
        value={cardColor}
        onChange={(e) => setCardColor(e.target.value)}
      />
    </div>

      <label className="form-check-label">
        Border
      </label>

      <input type="checkbox"
       id="border"
        name="borderCheckBox"
        className='border'
        onChange={(e) => setCardBorder(e.target.checked)}
      />

        <br />
      
        <label htmlFor="selected" className="form-check-label">
          Select
        </label>

        <select
          id="selected"
          name="select"
          className="form-select"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="title">title</option>
          <option value="category">category</option>
          <option value="rating">rating</option>
        </select>
        <button type="submit" className="btn btn-primary">
        Apply
      </button>
    
  </form>

  )
}
