import Link from 'next/link';
import React from 'react'



const Products = () => {
  const productId = 100
  return (
    <div>
      <h1>
        <Link className='underline' href={'/products/1'}>Product 1</Link>
      </h1>
      <h1>
        <Link className='underline' href={'/products/2'}>Product 2</Link>
      </h1>
      <h1>
        <Link className='underline' href={'/products/3'}>Product 3</Link>
      </h1>
      <h1>
        <Link className='underline' href={`/products/${productId}`} replace>Product 100</Link>
      </h1>
    </div>
  )
}

export default Products;