import React from 'react'
import { useParams } from 'react-router-dom';

const City = () => {;
  const { cityname } = useParams();
  console.log(cityname)
  return <h1 style={{textAlign: 'center'}}>{cityname.toUpperCase()}</h1>
}

export default City