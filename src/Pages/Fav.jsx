import React from 'react'
import { products } from '../Components/product'
import Card from '../Components/Card'
import '../Components/css/Card.css'

const Fav = () => {
  return (
    <div>
      <section className='cards__container'>{
        products.details.map((value) => {
          return (
            <div>
              <Card name={value.name}
                Img={value.imageURL}
                price={value.price}
                // id={value.productId}
                description={value.description} />
            </div>
          )
        })
      }
      </section>
    </div>
  )
}

export default Fav