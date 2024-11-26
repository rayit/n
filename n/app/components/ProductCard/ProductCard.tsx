import React from 'react'
import AddToCard from './AddToCard'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className='border-solid border-2 p-5 my-5 border-spacing-2'>
      <AddToCard />
    </div>
  )
}

export default ProductCard