import React from "react";
import AuthHoc from "./AuthHOC";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link , Outlet } from 'react-router-dom'
import { NewsContext} from '../Context/context';
const Navbar=()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
const[set,get]=React.useState("")
const {setfun}=React.useContext(NewsContext)
const Logout = () => {
  setAnchorEl(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

function handleChange(event){
  get(event.target.value);
}
const handleClose = () => {
  setAnchorEl(null);
};
const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2}}
          >
            <MenuIcon sx={{color:'white'}}/>
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem sx={{bgcolor:"black"}}onClick={handleClose}><Link to="/Profile" style={{textDecoration:'none' ,color:'blue'}}>Profile</Link></MenuItem>
                <MenuItem sx={{bgcolor:"black"}}onClick={Logout}><Link to="/" style={{textDecoration:'none' ,color:'blue'}}>Logout</Link></MenuItem>
              </Menu>
          <a className="navbar-brand" >
            News App
          </a>
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
            
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
export default AuthHoc(Navbar);
