import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>Title</p>
        <p className='product__price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className='product__rating'>
        <p>&#11088;</p>
        <p>&#11088;</p>
        <p>&#11088;</p>
        </div>
      </div>
      <img src='https://m.media-amazon.com/images/I/61BFOf9Ap-L._SL1200_.jpg' alt='lean startup'></img>
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
