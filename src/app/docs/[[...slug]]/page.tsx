// call-all-segements

import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {



  const {slug} = params;
  console.log("slug ---- ", slug)
  if(slug && slug.length === 2){
    return <h1>Vieweing feature of {slug[0]} and cencept of {slug[1]}</h1>
  }else if(slug && slug.length === 1){
    return <h1>Vieweing feature of {slug[0]}</h1>
  }
  return <div>Docs Home Page</div>;
};

export default Docs;
