
import React from 'react'

 async function Product  ({ params }: { params: { productId: string } }) {
  const  {productId}  = await params;
  return <div>Product is {productId}</div>;
};


export default Product;