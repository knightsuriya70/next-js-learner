import React from 'react'

 const Review = ({params} : {params:{productId : string , reviewId:string}}) => {
  const {reviewId , productId} = params
  return (
    <div>
      Review {reviewId} for Product {productId}
    </div>
  )
}

export default Review;
