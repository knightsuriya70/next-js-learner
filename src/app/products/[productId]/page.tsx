
import { Metadata } from 'next';
import React from 'react'

type Props = {
  params : Promise<{productId:string}>
}

export const generateMetadata = async ({
  params,
} : {params:{productId:string}} ) : Promise<Metadata> => {
 
  const title = `Iphone ${params.productId}`
  return {
    title : `Product ${title}`
  }
}

 async function Product  ({ params }: { params: { productId: string } }) {
  const  {productId}  = await params;
  return <div>Product is {productId}</div>;
};


export default Product;