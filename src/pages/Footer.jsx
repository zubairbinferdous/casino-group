import React from 'react';
import logo from '../assets/Online-Casino-Logo.webp';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
  <div className="container">
    <div className="row">
     
      <div className="col-md-4 text-center  footer-logo">
        <img src={logo} alt="" />
        {/* <h5 className="footer-title">Online Casino Groups</h5>
        <p>Follow Us On Our Socials</p> */}
      </div>
      
     
      <div className="col-md-3">
        <h5 className="footer-title">Casino</h5>
        <ul className="list-unstyled">
          <li><a href="/mobile">Casinos Rewards Casinos</a></li>
          <li><a href="/">Casino Country</a></li>
          <li><a href="/">Payment Casino</a></li>
        </ul>
      </div>
      
    
      <div className="col-md-3">
        <h5 className="footer-title"> Bonuses</h5>
        <ul className="list-unstyled">
          <li><a href="/Bonuses">Casino Bonuses</a></li>
          <li><a href="/Wagering">No Wagering</a></li>
          <li><a href="/Welcome">Welcome Bonus</a></li>
        </ul>
      </div>
      
     
      <div className="col-md-2">
        <h5 className="footer-title">Game</h5>
        <ul className="list-unstyled">
          <li><a href="/CasinoGame">Casino Games</a></li>
          <li><a href="/Baccarat">Baccarat Games</a></li>
          <li><a href="/Blackjack">BlackJack Games</a></li>
         
        </ul>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;