import skyScraper from '../assets/Images/Sky-scraper.jpg'
import solar from '../assets/Images/solar.jpg'
import bread from '../assets/Images/Bread.jpg'
import construction from '../assets/Images/Construction.jpg'
import board from '../assets/Images/Board-meeting.jpg'
import facebook from '../assets/Icons/facebook.svg'
import linkedin from '../assets/Icons/linkedin.svg'
import twitter from '../assets/Icons/twitter.svg'
import solarpanel from '../assets/Images/solar-50.png'
import service from '../assets/Images/service-50.png'
import constructionlogo from '../assets/Images/construction-80.png'




export const navLinks = [

    {href: '#home', label: 'Home'},
    {href: '#about-us', label: 'About Us'},
    {href: '#services', label: 'Services'},
    {href: '#contact-us', label: 'Contact Us'},
];

export const socialLinks = [
  {href: 'https://facebook.com',
    icon: facebook
  },
  {href: 'https://twitter.com',
  icon: twitter
},
{href: 'https://linkedin.com',
icon: linkedin
},

]

export const imageSlides = [
    {image: skyScraper,
      title: 'beyond boundaries 1',
      body: 'Lorem ipsum dolor sit amet',
      link: 'https://www.google.com/'
    },
    {image: solar,
      title: 'beyond boundaries 2',
      body: 'Lorem ipsum dolor sit amet',
      link: 'https://github.com/'
    },
    {image: bread,
      title: 'beyond boundaries 3',
      body: 'Lorem ipsum dolor sit amet',
      link: '#'
    },
    {image: construction,
      title: 'beyond boundaries 4',
      body: 'Lorem ipsum dolor sit amet',
      link: '#'
    },
    {image: board,
      title: 'beyond boundaries 5',
      body: 'Lorem ipsum dolor sit amet',
      link: '#'
    },
  ]

  export const services = [
    {image:solar,
      title1:'Solar/' ,
      title2: 'Clean Energy',
      icon:solarpanel,
      link:'#'
    },
    {image:board,
      title1:'General' ,
      title2: 'Services',
      icon:service,
      link:'#'
    },
    {image:construction,
      title1:'Construction' ,
      title2: 'Services',
      icon:constructionlogo,
      link:'#'
    },
  ]