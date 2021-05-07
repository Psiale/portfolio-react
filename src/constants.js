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
      details: "The user can create, see and update the number of raw materials on his business, see the raw material with the lowest amount on stock and see the list of all the raw materials.",
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
      details: "The user can see and filter through a list of Beers, click on one of the elements and go to a detailed product page.",
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
      details: "The user can create 2 players, select their names, choose a character, and play the game!",
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
      details: "The user can create and attend events, invite other friends to their events and see pending events.",
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
      details: "Our Hero (Regular Guy) enjoyed occultism and satanic rites, one day by mistake he invoked The Ancients, who now spread their terror throughout LittleCuteTown; your heroic task is to defeat them all, before all its inhabitants fall into an abyss of despair.",
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
      details: "The user can manually track the use of his cellphone, create groups with images, create records with and without a group relation and see all the records associated to a group.",
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
      details: "The user can get his BMI result with a custom description and share the results with his friends.",
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
    details: "The user can select from several countries currencies and see the cost of 3 of the most popular cryptocurrencies",
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
      details: "The user can see the current weather information for his location.",
      technologies: [{title: 'API Fetching'}, {title: 'iOS / Android permissions'}, {title: 'Loading Animation'} ],
      urls: {
        
        repository: "https://github.com/Psiale/Clima-Flutter/tree/feature/customSpinner",
        isMobile: true,
      },
    },
  ],
};

export default projects;
