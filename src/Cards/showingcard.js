import React from 'react'
import Card from '@mui/material/Card';
import axios from "axios";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import apiConfig from "../config";
export default function Showingcard(props) {
  function addToFavourite(v){
    axios.post(`${apiConfig.Favouritesapi}/AddToFavourites`,v)
  }
  return (
    <Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      height="140"
      image={props.urlToImage}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      { props.source.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {props.description}
      </Typography>
    </CardContent>
    <CardActions>
    <Grid item xs={4}>
    <Button variant="contained" >View</Button>
      </Grid>
      <Grid item xs={8} >
        <FavoriteIcon onClick={()=>{
          var values={
            source:props.source,
            urlToImage:props.urlToImage,
            description:props.description
          }
          addToFavourite(values);
        }}/>
      </Grid>
      
      
    </CardActions>
  </Card>
  )
}
