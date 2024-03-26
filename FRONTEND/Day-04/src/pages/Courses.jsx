import React from 'react';
import '../assets/styles/Courses.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// import {Link} from 'react-router-dom';
const offers = [
  
    [
        {
          "id": 1,
          "title": "Chess Fundamentals for Beginners",
          "description": "Master the basics of piece movement, strategy, and tactics.",
          "imageUrl": "https://www.chess.com/getfile/education/course/how-to-play-chess.png",
          "price": "$49"
        },
        {
          "id": 2,
          "title": "Intermediate Chess Tactics",
          "description": "Sharpen your tactical vision and learn to identify winning opportunities.",
          "imageUrl": "https://cdn.shopify.com/s/files/1/0272/2331/8434/products/Chess-Tactics-Patterns-by-Martin-Weteschnik_2048x2048.jpg?v=1612852232",
          "price": "$99"
        },
        {
          "id": 3,
          "title": "Advanced Chess Openings",
          "description": "Explore popular opening principles and repertoire development for different playing styles.",
          "imageUrl": "https://i.ytimg.com/vi/bqY_tMONT3c/hqdefault.jpg",
          "price": "$149"
        },
        {
          "id": 4,
          "title": "The Art of Chess Endgames",
          "description": "Master endgame techniques to convert advantages and secure victories.",
          "imageUrl": "https://static1.squarespace.com/static/5926f023e23e8a27288c981c/t/5f3adc9e22f3e27403d2801c/1596222222202/Endgame+Book+Recommendations.jpg?format=2500w",
          "price": "$79"
        },
        {
          "id": 5,
          "title": "Chess for Kids (Ages 6-10)",
          "description": "A fun and interactive introduction to chess for young learners.",
          "imageUrl": "https://images.squarespace.com/content/v1/5926f023e23e8a27288c981c/1580778323223-C2XP8BYY2IBKWONJ2NQZ/Kids+Chess+Classes+Online+and+In-Person+Lessons.jpg?format=2500w",
          "price": "$120"
        },
        {
          "id": 6,
          "title": "Chess Psychology and Mental Training",
          "description": "Develop your mental game to stay focused, manage emotions, and improve decision-making under pressure.",
          "imageUrl": "https://blog.chess.com/wp-content/uploads/2019/04/Chess-Psychology-101-How-to-Improve-Your-Mental-Game.jpg",
          "price": "$69"
        }
      ]
      
  
  
];

const Academy = () => {
  const handleViewClick = () => {
  
    console.log('View clicked for offer with ID ${offerId}');
  };
  const handleSubmitClick = () => {
    console.log('Submit clicked for offer with ID ${offerId}');
  };

  return (
    <div>
    <Navbar/>
      <body>
    <div className="offers-container">
      
      {offers.map(offer => (
        <div className="offer" key={offer.id}>
          <img className="offer-image" src={offer.imageUrl} alt={offer.title} />
          <h2 className="offer-title">{offer.title}</h2>
          <p className="offer-description">{offer.description}</p>
          <p className="offer-price">{offer.price}</p>
          <div className="offer-buttons">
         <button type='submiti' onClick={() => handleViewClick(offer.id)}>View</button>
          <button type='submiti' onClick={() => handleSubmitClick(offer.id)}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
    </body>
    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default Academy;