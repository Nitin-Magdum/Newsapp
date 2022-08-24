import React from 'react'
import apiConfig from "../config";
import axios from "axios";
import Box from '@mui/material/Box';
import Favouritecard from '../Cards/Favouritecard';
export default function Getfavouritenews() {
  const[set,get]=React.useState([])
  React.useEffect(()=>{
    axios.get(`${apiConfig.Favouritesapi}/GetFavourites`)
    .then(data=>{
        get(data.data)
    })
})
  return (
    <Box sx={{
      display: 'grid',
      gap: 1,
      gridTemplateColumns: 'repeat(2, 1fr)',
    }} >{ 
          set.map((i)=>{
              
return (     
<Favouritecard key={i._id} id={i._id}author={i.author} source={i.source} title={i.title} description={i.description}
                  url={i.url} urlToImage={i.urlToImage} publishedAt={i.publishedAt}></Favouritecard>
)

  
          })
 }</Box> 
  )
}
