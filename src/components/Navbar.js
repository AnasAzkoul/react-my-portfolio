import {GiHamburgerMenu} from 'react-icons/gi'; 
import {links} from '../utils/constants'; 
import styled from 'styled-components'
import {Link} from 'react-router-dom'; 
import IconButton from './IconButton'; 
import { useNavContext } from '../contexts/NavContext';

const Navbar = () => {
  const {openSidebar} = useNavContext(); 

  return (
    <Wrapper>
      <div className='nav-center'>
        <IconButton
          className='nav-toggle'
          type='nav'
          onClick={openSidebar}
        >
          <GiHamburgerMenu />
        </IconButton>
      </div>
      <ul className='nav-links'>
        {links.map((link, index) => {
          const { id, text, url } = link;
          return (
            <li
              key={id}
              style={{animation: `fade-in ${index + 1}s ease`}}
            >
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Navbar; 

const Wrapper = styled.nav`
  height: 5rem;
  width: 90vw;

  .nav-center {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .nav-toggle {
    color: var(--clr-primary-2);
    position: absolute;
    top: 2.5rem;
  }

  .nav-links {
    display: none;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;

    .nav-toggle {
      display: none;
    }
    .nav-links {
      display: flex;
      text-decoration: none;
      list-style-type: none;
    }
    .nav-links li {
      margin: 0 4rem;
      transition: all 0.3s ease-out;
    }

    .nav-links li:hover::after {
      content: '';
      display: block;
      background-color: var(--clr-primary-4);
      height: 0.3rem;
      animation: moveFromLeft 1s;
    }

    .nav-links li a {
      text-transform: capitalize;
      text-decoration: none;
      color: #ccc;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
  }
`; 
