import {GiHamburgerMenu} from 'react-icons/gi'; 
import {links} from '../utils/constants'; 
import {Link} from 'react-router-dom'; 
import IconButton from './IconButton'; 
import { useNavContext } from '../contexts/NavContext';

const Navbar = () => {
  const {openSidebar} = useNavContext(); 

  return (
    <nav className='nav-container'>
      <div className='nav-center'>
        <IconButton className='nav-toggle' type='nav' onClick={openSidebar}>
          <GiHamburgerMenu />
        </IconButton>
      </div>
      <ul className='nav-links'>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar; 
