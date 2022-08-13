import {Link} from 'react-router-dom'; 
import {links} from '../utils/constants'; 
import {useNavContext} from '../contexts/NavContext';
import {FaTimes} from 'react-icons/fa'; 
import IconButton from './IconButton'; 

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useNavContext(); 
  return (
    <div className='sidebar-container'>
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
    </div>
  );

}

export default Sidebar
