import React from 'react'
import apiConfig from "../config";
import axios from "axios";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Showingcard from '../Cards/showingcard';
import { NewsContext} from '../Context/context';
const Search=()=> {
    const[set,get]=React.useState([])
    const {getfun}=React.useContext(NewsContext)
    const navigate = useNavigate();
    var c=0;
React.useEffect(()=>{
    var a={getfun}
    if(a.getfun===""){
navigate('/Home')
    }else{
        axios.get(`${apiConfig.thirdpartyapi}/news/search?q=${a.getfun}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
              }            
        })
          .then(data=>{
              get(data.data)
          })
    }
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

export default Search;
