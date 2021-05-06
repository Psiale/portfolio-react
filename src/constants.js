import onstockDesktop from './img/onstock-desktop.png'
import onstockMobile from './img/onstock-mobile.png'
import beerDesktop from './img/beer-desktop.png'
import beerMobile from './img/beer-mobile.png'
import phoneoffDesktop from './img/phoneoff-desktop.png'
import phoneoffMobile from './img/phoneoff-mobile.png'
import privateDesktop from './img/private-desktop.png'
import privateMobile from './img/private-mobile.png'
import tictactoeDesktop from './img/tictactoe-desktop.png'
import tictactoeMobile from './img/tictactoe-mobile.png'
import rpgDesktop from './img/rpg-desktop.png'
import cryptoGif from './img/crypto.gif'
import climaGif from './img/clima.gif'
import bmiGif from './img/bmi.gif'

const projects = {
  web: [
    {   light:true,
      title: "OnStock",
      images: {
        desktop: onstockDesktop,
        mobile: onstockMobile,
      },
      details: "some details here",
      technologies: [
        {
          title: "Fullstack",
        },
        {
          title: "React & Redux",
        },
        {
          title: "Ruby on Rails",
        },
        {
          title: "JWT",
        },
      ],
      urls: {
        demo: "https://onstock.netlify.app/#/",
        repository: "https://github.com/Psiale/onStock-frontend",
      },
    },
    {
      title: "Beer Catalogue",
      images: {
        desktop: beerDesktop,
        mobile: beerMobile,
      },
      details: "some Details",
      technologies: [        {
        title: "React & Redux",
      },
      {
        title: "Redux-Thunk",
      },
      {
        title: "CSS Modules",
      },
      {
        title: "API Fetching",
      },],
      urls: {
        demo: 'https://beer-catalogue.netlify.app',
        repository: 'https://github.com/Psiale/beer-react-redux',
      },
    },
    { light:true,
      title: "Js TicTacToe",
      images: {
        desktop: tictactoeDesktop,
        mobile: tictactoeMobile,
      },
      details: "some details",
      technologies: [
        {
          title: "Vanilla JS",
        },
        {
          title: "Sass/Scss",
        },
        {
          title: "DOM Manipulation",
        }
      ],
      urls: {
        demo: "https://got-tictactoe.netlify.app",
        repository: "https://github.com/Psiale/Javascript-Tic-Tac-Toe",
      },
    },
    {
      title: "Private Events",
      images: {
        desktop: privateDesktop,
        mobile: privateMobile,
      },
      details: "some details",
      technologies: [{
        title: "Ruby On Rails",
      },
      {
        title: "ERB",
      },
      {
        title: "Bulma",
      },
      {
        title: "Rspec",
      },],
      urls: {
        demo: "https://guarded-dusk-24319.herokuapp.com",
        repository: "https://github.com/Psiale/private-events",
      },
    },
    { light:true,
      title: "RPG Game",
      images: {
        desktop: rpgDesktop,
      },
      details: "some details",
      technologies: [{title: "JavaScript"}, {title: "Phaser 3"}, {title: "Tilemaps"}],
      urls: {
        demo: "https://psiale.github.io/rpg-game/",
        repository: "https://github.com/Psiale/rpg-game",
      },
    },
    {
      title: "PhoneOff",
      images: {
        desktop: phoneoffDesktop,
        mobile: phoneoffMobile,
      },
      details: "some details",
      technologies: [{
        title: "Ruby On Rails",
      },
      {
        title: "Active Storage",
      },
      {
        title: "Bulma",
      },
      {
        title: "Rspec",
      },],
      urls: {
        demo: "https://warm-wave-61802.herokuapp.com/records",
        repository: "https://github.com/Psiale/phone-off/",
      },
    },
  ],
  mobile: [
    
    { light: true,
      title: "BMI Calculator",
      
      images: {
        desktop: bmiGif,
      },
      details: "some details",
      technologies: [{title: 'Custom Theme'}, {title: 'Routing'}, {title: 'Screenshot / Share option'} ],
      urls: {
        
        repository: "https://github.com/Psiale/bmi-calculator-flutter/tree/feature/modal",
        isMobile: true,
      },
    },
    { title: "Crypto",
      unset: true,
      images: {
      desktop: cryptoGif,
    },
    details: "some details",
    technologies: [{title: 'Flutter'}, {title: 'iOs/Android'}, {title: 'API Fetching'}],
    urls: {
      repository: "https://github.com/Psiale/bitcoinTickerFlutter/tree/develop/BitcoinTicker",
      isMobile: true,
    },
    },
    { light: true,
      title: "Weather APP",
      images: {
        desktop: climaGif,
      },
      details: "some details",
      technologies: [{title: 'API Fetching'}, {title: 'iOS / Android permissions'}, {title: 'Loading Animation'} ],
      urls: {
        
        repository: "https://github.com/Psiale/Clima-Flutter/tree/feature/customSpinner",
        isMobile: true,
      },
    },
  ],
};

export default projects;
