import React from 'react'
import "./SearchPage.css"
import Button from '@material-ui/core/Button';
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage__info">
        <p>62 Guests. 26 January to 30. 2 Guests </p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined" color="primary">
        Cancellation Flexibility
      </Button>
      <Button variant="outlined" color="primary">
        Type of Place
      </Button>
      <Button variant="outlined" color="primary">
        Price
      </Button>
      <Button variant="outlined" color="primary">
        Rooms and Bed
      </Button>
      <Button variant="outlined" color="primary">
      More filters
    </Button>
        </div>

        <SearchResult
        img="https://a0.muscache.com/im/pictures/139076d5-e4c2-4c19-bc92-e33fb2d2ac0b.jpg?im_w=1200"
        location="Gurugram, Haryana, India"
        title="Bright & Eclectic 3BHK Modern House with Courtyard"
        description="8 guests · 3 bedrooms · 3 beds · 3 bathrooms"
        star={4.73}
        price="₹3000 / night"
        total="₹9000 total"
    />

    <SearchResult
        img="https://a0.muscache.com/im/pictures/6c7688d2-77c5-49f8-a36d-1bc2ae5f6956.jpg?im_w=1200"
        location="Candolim,Goa,India"
        title="1 Bedroom apartment near Candolim beach"
        description="4 guests · 1 bedroom · 2 beds · 1 bathroom· Wifi · Kitchen"
        star={4.3}
        price="₹1,500 / night"
        total=" ₹4,500 total"
    />

    <SearchResult
        img="https://a0.muscache.com/im/pictures/e63b1544-4702-4b30-9cf7-88d7524c9a89.jpg?im_w=1200"
        location="North Goa, Goa, India"
        title="2 Bedrooms Designer Apartment | Pool View"
        description="5 guests · 2 bedrooms · 2 beds · 2 bathrooms"
        star={3.8}
        price="₹6,999 / night"
        total="₹18,999 total"
    />
    <SearchResult
        img="https://a0.muscache.com/im/pictures/b1cba984-ad1c-48d1-9dc2-266e8fd1abdd.jpg?im_w=1200"
        location="Cavelossim, Goa, India"
        title="Villa Bougainvillea"
        description="5 guests · 2 bedrooms · 2 beds · 2 bathrooms"
        star={4.1}
        price="₹8,499 / night"
        total="₹25,000 total"
    />
    <SearchResult
        img="https://a0.muscache.com/im/pictures/fd5c7e4a-23fe-4002-85ca-421cb941df51.jpg?im_w=1200"
        location="Mapusa, Goa, India"
        title="Luxurious brand new duplex - Siolim"
        description="6 guests · 2 bedrooms · 2 beds · 2 bathrooms"
        star={5.0}
        price="₹9,199 / night"
        total="₹26,499 total"
    />
    <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-45545025/original/08c09af2-1759-4bc6-bfd9-17cda366d821.jpeg?im_w=1200"
        location="Assagao, Goa, India"
        title="La Verde - 3BHK Villa Private Pool amidst nature"
        description="8 guests · 3 bedrooms · 3 beds · 3 bathrooms"
        star={4.23}
        price="₹12,857 / night"
        total="₹36,000 total"
    />
    <SearchResult
        img="https://a0.muscache.com/im/pictures/b4b47855-583b-4f97-85d2-a7f783abd307.jpg?im_w=1200"
        location="Siolim, Goa, India"
        title="Beautiful & cozy Studio Apartment @ Siolim"
        description="2 guests · Studio · 1 bed · 1.5 bathrooms"
        star={3.85}
        price="₹2,288 / night"
        total="₹6,000 total"
    />



            
        </div>
    )
}

export default SearchPage;
