import skyScraper from '../assets/Images/Sky-scraper.jpg'
import solar from '../assets/Images/solar.jpg'
import bread from '../assets/Images/Bread.jpg'
import construction from '../assets/Images/Construction.jpg'
import board from '../assets/Images/Board-meeting.jpg'
import facebook from '../assets/Icons/facebook.svg'
import linkedin from '../assets/Icons/linkedin.svg'
import twitter from '../assets/Icons/twitter.svg'


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