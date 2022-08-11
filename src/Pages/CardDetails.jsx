import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Extra/CardDot.css";

const CardDetails = () => {
    const location = useLocation();
    const { name, Img, price, description } = location.state;
    return (
        <div>
            <div className='single_top'>
                <div className='single__page'>
                    <div className='card_details_left'>
                        <img src={Img} alt="" />
                    </div>
                    <div className='card_details_right'>
                        <h3>{name}</h3>
                        <p>{price}</p>
                        <p>{description}</p>
                        <div>
                            <a href="/order"><button >Buy Now</button>  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails