import React from 'react';
import '../assets/styles/Academy.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// import {Link} from 'react-router-dom';
const offers = [
  
  {
    id: 1,
    title: 'Kings and Pawns Chess Academy',
    description: 'Where Every Move Leads to Mastery.',
    price: '$99',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBo7XdNS-y-4BVDWzIC_6CoMN-vuxjHNQOXg&usqp=CAU'
  },
  {
    id: 2,
    title: 'Grandmaster s Gateway:',
    description: ' Your Gateway to Grandmaster Strategies.',
    price: '$100',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn2YGgnBYQ9IBQxf8bDybwQiX-dy5TNk1NU2OaGExVJyDuGoSkd5aESC38UBCzdTNwjI&usqp=CAU'
  },
  {
    id: 3,
    title: 'Kanata Chess Academy',
    description: 'Fortify Your Skills, Conquer the Board.',
    price: '$150',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzQ8sCyuDXDoevpQGgkIerkvHa6nWr7GEq0xWVyjGnWp84Jq9VoA82gJCaRpL4JRNrBs&usqp=CAU'
  },
  {
    id: 4,
    title: 'Knights Move Academy',
    description: 'Master Unexpected Moves, Master Chess.',
    price: '$250',
    imageUrl: 'https://129958440.cdn6.editmysite.com/uploads/1/2/9/9/129958440/s254803549462867385_p61_i1_w799.jpeg'
  },
  {
    id: 5,
    title: 'Chess Odyssey Institute',
    description: 'Embark on Your Epic Chess Journey.',
    price: '$500',
    imageUrl: 'https://ananthichessacademy.com/wp-content/uploads/2019/11/download-8.jpg'
  },
  {
    id: 6,
    title: 'Bishop s Battle Chess Academy',
    description: 'Diagonal Strategies, Direct Victories.',
    price: '$980',
    imageUrl: 'https://previews.123rf.com/images/dskabelev/dskabelev1812/dskabelev181200025/127377906-russia-vladivostok-12-01-2018-kids-play-chess-during-chess-competition-in-chess-club-education-chess.jpg'
  },
  
  {
    id: 7,
    title: 'Endgame Experts Academy',
    description: 'Building Strong Foundations, One Rook at a Time',
    price: '$765',
    imageUrl: 'https://www.chessjournal.com/wp-content/uploads/2020/10/Magnus-Carlsen-Chess-Player-Profile-750x422.jpg'
  },
  
  {
    id: 8,
    title: 'Chess Champions Institute',
    description: 'Where Champions are Forged on the Chessboard.',
    price: '$435',
    imageUrl: 'https://th.bing.com/th/id/OIP.BEudfn0Gy26i_EeakXaHbQHaE8?rs=1&pid=ImgDetMain'
  },
  
  // {
  //   id: 9,
  //   title: 'Motel',
  //   description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
  //   price: '$210',
  //   imageUrl: 'https://avatars.mds.yandex.net/i?id=06efb01e6b875999987491321d9b8a985ab3ae3b-8411743-images-thumbs&n=13'
  // },
  
  // {
  //   id: 10,
  //   title: 'Retreat',
  //   description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
  //   price: '$800',
  //   imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovyghYpGRC7lCN5yCvZBCeMBFWynZUovNZA&usqp=CAU'
  // },
  
  
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