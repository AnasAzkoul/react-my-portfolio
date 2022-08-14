import React from 'react'; 
import {AiFillHtml5} from 'react-icons/ai'; 
import {DiCss3, DiSass} from 'react-icons/di'; 
import {TbBrandTailwind} from 'react-icons/tb';
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io';
import {GrReactjs} from 'react-icons/gr'; 
import { SiMongodb } from 'react-icons/si';

export const links = [
  {
    id: 1, 
    text: 'About', 
    url: '/about'
  }, 
  {
    id: 2, 
    text: 'My Skills', 
    url: '/my-skills'
  }, 
  {
    id: 3, 
    text: 'projects', 
    url: '/projects'
  }, 
  {
    id: 4, 
    text: 'Contact', 
    url: '/contact'
  }
]

export const techStack = [
  {
    id: 1,
    text: 'HTML',
    logo: <AiFillHtml5 />,
    style: { color: '#800000' },
  },
  {
    id: 2,
    text: 'CSS',
    logo: <DiCss3 />,
    style: { color: '#264de4' },
  },
  {
    id: 3,
    text: 'Sass',
    logo: <DiSass />,
    style: { color: ' #c69' },
  },
  {
    id: 4,
    text: 'Tailwind',
    logo: <TbBrandTailwind />,
    style: { color: '#3490dc' },
  },
  {
    id: 5,
    text: 'javascript',
    logo: <IoLogoJavascript />,
    style: { color: '#F0DB4F' },
  },
  {
    id: 5,
    text: 'react',
    logo: <GrReactjs />,
    style: { color: '#61DBFB' },
  },
  {
    id: 5,
    text: 'node js',
    logo: <IoLogoNodejs />,
    style: { color: '#68A063' },
  },
  {
    id: 5,
    text: 'express',
    logo: '',
    style: {
      fontSize: '1.6rem',
      textTransform: 'capitalize',
    },
  },
  {
    id: 5,
    text: 'mongo db',
    logo: <SiMongodb />,
    style: { color: '#4DB33D' },
  },
];
