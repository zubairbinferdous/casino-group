import React from 'react';
import logo from '../assets/Online-Casino-Logo.webp';

const Header = () => {
    return (
        <div>

  <nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container">
       <div className="logo">
       <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
       </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Casino
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
              <li><a className="dropdown-item" href="/mobile">Mobile Casino</a></li>
              <li><a className="dropdown-item" href="/">Casino Country</a></li>
              <li><a className="dropdown-item" href="/">Payment Casino</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bonuses
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
              <li><a className="dropdown-item" href="/Bonuses">Casino Bonuses</a></li>
              <li><a className="dropdown-item" href="/Wagering">No Wagering</a></li>
              <li><a className="dropdown-item" href="/Welcome">Welcome Bonus</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Game
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
              <li><a className="dropdown-item" href="/CasinoGame">Casino Games</a></li>
              <li><a className="dropdown-item" href="/Baccarat">Baccarat Games</a></li>
              <li><a className="dropdown-item" href="/Blackjack">BlackJack Games</a></li>
            </ul>
          </li>

       

        
        </ul>
      </div>
    </div>
  </nav>



        </div>
    );
};

export default Header;