import React from 'react'

const Product = ({params}: {params : {productId:string}}) => {
  const {productId} = params
  return (
    <div>Product is {productId}</div>
  )
}
export default Product