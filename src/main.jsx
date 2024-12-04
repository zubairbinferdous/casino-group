/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Baccarat from './pages/Baccarat.jsx'
import BetstroReview from './pages/BetstroReview.jsx'
import BitkingzReview from './pages/BitkingzReview.jsx'
import Blackjack from './pages/Blackjack.jsx'
import BonusBetReview from './pages/BonusBetReview.jsx'
import Bonuse from './pages/Bonuse.jsx'
import CasinoGame from './pages/CasinoGame.jsx'
import FlappyReview from './pages/FlappyReview.jsx'
import GambliiReview from './pages/GambliiReview.jsx'
import LuckyReview from './pages/LuckyReview.jsx'
import LunuBetReview from './pages/LunuBetReview.jsx'
import MobileCasino from './pages/MobileCasino.jsx'
import MonixbetReview from './pages/MonixbetReview.jsx'
import Neon54 from './pages/Neon54.jsx'
import PolestarReview from './pages/PolestarReview.jsx'
import QueenReview from './pages/QueenReview.jsx'
import SpinBetterReview from './pages/SpinBetterReview.jsx'
import StaXinoReview from './pages/StaXinoReview.jsx'
import TouchReview from './pages/TouchReview.jsx'
import Wagering from './pages/Wagering.jsx'
import Welcome from './pages/Welcome.jsx'
import WizebetsReview from './pages/WizebetsReview.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/mobile',
    element:<MobileCasino></MobileCasino>
  },

  {
    path:'/Bonuses',
    element:<Bonuse></Bonuse>
  },
  {
    path:'/Wagering',
    element:<Wagering></Wagering>
  },
  {
    path:'/Welcome',
    element:<Welcome></Welcome>
  },
  {
    path:'/CasinoGame',
    element:<CasinoGame></CasinoGame>
  },

  {
    path:'/Baccarat',
    element:<Baccarat></Baccarat>
  },
  {
    path:'/Blackjack',
    element:<Blackjack></Blackjack>
  },





  {
    path:'/Wizebets',
    element:<WizebetsReview></WizebetsReview>
  },
  {
    path:'/Touch',
    element:<TouchReview></TouchReview>
  },
  {
    path:'/Polestar',
    element:<PolestarReview></PolestarReview>
  },
  {
    path:'/Gamblii',
    element:<GambliiReview></GambliiReview>
  },
  {
    path:'/Lucky',
    element:<LuckyReview></LuckyReview>
  },
  {
    path:'/Monixbet',
    element:<MonixbetReview></MonixbetReview>
  },
  {
    path:'/LunuBet',
    element:<LunuBetReview></LunuBetReview>
  },
  {
    path:'/Flappy',
    element:<FlappyReview></FlappyReview>
  },
 
  {
    path:'/StaXino',
    element:<StaXinoReview></StaXinoReview>
  },
  {
    path:'/Neon',
    element:<Neon54></Neon54>
  },
  {
    path:'/BonusBet',
    element:<BonusBetReview></BonusBetReview>
  },
  {
    path:'/Betstro',
    element:<BetstroReview></BetstroReview>
  },
  {
    path:'/Queen',
    element:<QueenReview></QueenReview>
  },
  {
    path:'/Bitking',
    element:<BitkingzReview></BitkingzReview>
  },
  {
    path:'/SpinBetter',
    element:<SpinBetterReview></SpinBetterReview>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
