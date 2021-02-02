import React from 'react'
import Banner from './Banner'
import Card from './Card'
import Card2 from "./Card2"
import CardDetails from "./CardDetails";
import CardDetails2 from "./CardDetails2";
import "./Home.css"

const create =(contact)=>{
    return(
    <Card  
    src={contact.src}
    title={contact.title}
    description={contact.description}
    />
    )
}

const create2 =(contact)=>{
    return(
    <Card2  
    src={contact.src}
    title={contact.title}
    description={contact.description}
    price={contact.price}
    />
    )
}
function Home() {
    console.log(CardDetails);
    return (
        <div>
    
       <Banner />
       <h1 style={{marginTop:"60px" ,marginLeft:"40px"}}>Live Anywhere</h1>
       <div className="home__section">
       {CardDetails.map(create)}
       </div>
       <h1 style={{marginTop:"60px" ,marginLeft:"40px"}}>Top-rated holiday rentals in India</h1>
       <div className="home__section">
       {CardDetails2.map(create2)}
       
       </div>
     

    
   

            
        </div>
    )
}

export default Home
