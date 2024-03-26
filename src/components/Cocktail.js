import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, info, glass, id }) => {
  return (
    <section className='cocktails'>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={'/cocktails/:id'} className='btn btn-primary'>
          details
        </Link>
      </div>
    </section>
  )
}

export default Cocktail
