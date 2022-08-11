import React from 'react'
import { NavLink } from 'react-router-dom';
const Card = (props) => {
  const { Img, name, price, description, id } = props;
  
  return (
    <NavLink state={{ Img: Img, name: name, price: price, description: description, id: id }} to={`/category/${id}`}>
      <div className={id}  >
        <div className='product_card'>
          <div className='card__img'>
            <img src={Img} alt={name} />
          </div>
          <h4>{name}</h4>
          <h5>{`Rs. ${price} `}</h5>
          <div className='qwerty'>
            <a href="/order"><button >Buy Now</button>  </a>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Card