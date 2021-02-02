import React ,{useState}from 'react'
import Button from '@material-ui/core/Button';
import Search from "./Search";
import {useHistory} from "react-router-dom";

import "./Banner.css"

function Banner() {
   const [showSearch, setShowSearch] = useState(false);
   const history = useHistory();


    return (
        <div  className="banner">
        <div className="banner__search">
        
        
        <Button onClick={()=> setShowSearch(!showSearch)}  className="banner__searchButton" variant="outlined">
        {showSearch ? "Hide" : "Search Date"}
        
        
        
        </Button>
        {showSearch && <Search />}
        </div>



    <div className="banner__info">
    <h1>Get out and stretch your Imagination</h1>
    <h5>Paln A different kind of gateaway to uncover the hidden gema near you.</h5>

    <Button onClick={()=> history.push("/search")} variant="outlined">Explore Nearby</Button>
    
    
    </div>
        

            
        </div>
    )
}

export default Banner
