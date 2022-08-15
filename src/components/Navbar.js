import {GiHamburgerMenu} from 'react-icons/gi'; 
import {links} from '../utils/constants'; 
import styled from 'styled-components'
import {Link} from 'react-router-dom'; 
import IconButton from './IconButton'; 
import { useNavContext } from '../contexts/NavContext';

const Navbar = () => {
  const {openSidebar} = useNavContext(); 

  return (
    <NavContainer>
      <div className='nav-center'>
        <IconButton className='nav-toggle' type='nav' onClick={openSidebar}>
          <GiHamburgerMenu />
        </IconButton>
      </div>
      <div className='nav-links-container'>
        <ul className='nav-links'>
          {links.map((link, index) => {
            const { id, text, url } = link;
            return (
              <li key={id} style={{ animation: `fade-in ${index + 1}s ease` }}>
                <span className='index'>0{index + 1}. </span>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <button type='button' className='btn btn-resume'>
          Resume
        </button>
      </div>
    </NavContainer>
  );
};

export default Navbar; 

const NavContainer = styled.nav`
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
    justify-content: flex-end;
    margin-top: 2.5rem;

    .nav-toggle {
      display: none;
    }

    .nav-links-container {
      display: flex;
      align-items: center;
      
      .btn-resume{
        padding: 0.5rem 1.5rem;
        width: 10rem;
      }

      .nav-links {
        display: flex;
        text-decoration: none;
        list-style-type: none;

        li {
          margin: 0 4rem;
          transition: all 0.3s ease-out;

          /* :hover::after {
          content: '';
          display: block;
          background-color: var(--clr-primary-4);
          height: 0.3rem;
          animation: moveFromLeft 1s;
        } */

          a {
            text-transform: capitalize;
            text-decoration: none;
            color: var(--clr-primary-7);
            font-size: 1rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
          }

          .index {
            color: var(--clr-primary-4);
            font-size: 1.2rem;
          }

          a:hover {
            color: var(--clr-primary-4);
          }

          .index:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`; 
