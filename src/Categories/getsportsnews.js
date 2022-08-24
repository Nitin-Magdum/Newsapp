import React from 'react'
import apiConfig from "../config";
import axios from "axios";
import Box from '@mui/material/Box';
import Showingcard from '../Cards/showingcard';
export default function Getsportsnews() {
  const[set,get]=React.useState([])
  var c=0
  React.useEffect(()=>{
      axios.get(`${apiConfig.thirdpartyapi}/news?q=sports`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }            
    })
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
<Showingcard  key={++c} author={i.author} source={i.source} title={i.title} description={i.description}
                  url={i.url} urlToImage={i.urlToImage} publishedAt={i.publishedAt}></Showingcard>
)

  
          })
 }</Box> 
)
}
