import {Link} from 'react-router-dom'; 
import styled from 'styled-components'
import {links} from '../utils/constants'; 
import {useNavContext} from '../contexts/NavContext';
import {FaTimes} from 'react-icons/fa'; 
import IconButton from './IconButton'; 

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useNavContext(); 
  return (
    <Wrapper>
      <aside className={`${isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <h2 className='sidebar-header-info'>
            <span className='info-main'>Anas</span>
            <span className='info-sub'>Web Developer</span>
          </h2>
          <IconButton onClick={closeSidebar}>
            <FaTimes />
          </IconButton>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );

}

export default Sidebar; 


const Wrapper = styled.div`
  text-align: left;

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-primary-1);
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 4rem;
  }

  .sidebar-header-info {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  }

  .info-main {
    font-size: 3rem;
    font-family: inherit;
    font-weight: 400;
  }

  .info-sub {
    font-size: 1.6rem;
    font-weight: 300;
    color: #a0a0a0;
    letter-spacing: 0.2rem;
  }

  .sidebar-toggle {
    color: var(--clr-primary-2);
    font-size: 2.5rem;
    position: relative;
    top: -0.7rem;
    right: -3rem;
  }

  .sidebar-toggle:active {
    animation: rotate 1s;
  }

  .links {
    margin-bottom: 2rem;
    margin-left: 4rem;
    list-style-type: none;
    margin-top: 2rem;
  }

  .links li {
    margin-top: 3rem;
    transition: all 0.3s ease-in;
  }

  .links li:hover {
    padding: 0;
    background-color: #a0a0a0;
    color: white;
    cursor: pointer;
  }

  .links a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 1.6rem;
    color: white;
    font-weight: 200;
  }

  @media screen and (min-width: 800px) {
    .sidebar {
      display: none;
    }
  }
`; 
