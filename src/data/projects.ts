import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    projectName: '❤️U Festival',
    description: 'Een festival website/app voor de telefoon met informatie over het evenement, artiesten, tickets en meer.',
    image: {
      url: '/img/love_u_festival.png', // Using existing love_u_festival.png as placeholder
      alt: '❤️U Festival Preview'
    },
    linkGitHub: 'https://github.com/Thomas-Pol/-U-festival',
    linkLive: 'https://u230609.gluwebsite.nl/u_festival/'
  },
  {
    id: '2',
    projectName: 'Runhaar/monumenten onderhoud',
    description: 'Work in progress / Een website voor een bedrijf dat monumenten onderhoudt, met informatie over diensten, projecten en contactmogelijkheden.',
    image: {
      url: '/img/voorbeeld-foto-runhaar.png', // Using existing wave.png as placeholder
      alt: 'Monumenten Onderhoud Preview'
    },
    linkGitHub: 'heeft geen github',
    linkLive: 'https://lemonchiffon-swallow-707223.hostingersite.com/'
  },
  {
    id: '3',
    projectName: 'Virtual assitant informatie website',
    description: 'Een website voor een virtuele assistent met informatie over diensten, tarieven en contactmogelijkheden.',
    image: {
      url: '/img/vafloor-1.png', // Using existing wave.png as placeholder
      alt: 'Virtual Assistant Website Preview'
    },
    linkGitHub: 'https://github.com/Thomas-Pol/vaFloor',
    linkLive: 'https://www.vafloor.nl/'
  },
  {
    id: '4',
    projectName: 'AnnexBios',
    description: 'Een project waar we een bioscoop website moesten maken waar mensen kaartjes konden reserveren om naar de film te gaan.',
    image: {
      url: '/img/annexBios.png', // Using existing wave.png as placeholder
      alt: 'AnnexBios Preview'
    },
    linkGitHub: 'https://github.com/David-Schoots/AnnexBios',
    linkLive: 'https://annexbiosbilthoven.gluwebsite.nl/'
  }
];