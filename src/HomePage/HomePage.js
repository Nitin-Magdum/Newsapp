import React from "react";
import AuthHoc from "./AuthHOC";
import Button from '@mui/material/Button';
import { Link , Outlet } from 'react-router-dom'
import { NewsContext} from '../Context/context';
const Navbar=()=> {
const[set,get]=React.useState("")
const {setfun}=React.useContext(NewsContext)
const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

function handleChange(event){
  get(event.target.value);
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" >
            News App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                >
                 <Link to ="" style={{textDecoration:'none' ,color:'whitesmoke'}}>Home</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/AddToFavourites" >
                  <Link to ="favourite" style={{textDecoration:'none' ,color:'whitesmoke'}}>Favourites</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/getbusinessnews" >
                  <Link to ="business" style={{textDecoration:'none' ,color:'whitesmoke'}}>Business</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/getsportsnews" >
                  <Link to ="sports" style={{textDecoration:'none' ,color:'whitesmoke'}}>Sports</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/getsciencenews">
                  <Link to ="science" style={{textDecoration:'none' ,color:'whitesmoke'}}>Science</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/gettechnologynews">
                  <Link to ="technology" style={{textDecoration:'none' ,color:'whitesmoke'}}>Technology</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/gethealthnews" >
                  <Link to ="health" style={{textDecoration:'none' ,color:'whitesmoke'}}>Health</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/getentertainmentnews">
                  <Link to ="entertainment" style={{textDecoration:'none' ,color:'whitesmoke'}}>Entertainment</Link> 
                </a>
              </li>
              
              

              <form className="d-flex px-4 ">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <Button className="btn btn-outline-success"   variant="contained" color="success"
                onClick={()=>
                  setfun(set)}>
                <Link to="search"style={{textDecoration:'none' ,color:'whitesmoke'}}>Search</Link> 
                </Button>
              </form>
            </ul>
            <form className="d-flex">
              <button className="btn btn btn-danger" type="submit" onClick={Logout} >
              <Link to="/"style={{textDecoration:'none' ,color:'whitesmoke'}}> Logout</Link> 
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
export default AuthHoc(Navbar);
