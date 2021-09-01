import { AiFillHome } from 'react-icons/ai';
import Image from '../../assets/images/Logo-with-name.png';
import { NavItem } from '../Navbar/NavItem';

const Sidebar = ({ open }) => {
  return (
    <section className={`sidebar ${open ? 'sidebar-show' : ''} `}>
      <div className={`sidebar__container ${open ? 'show-content' : ''}`}>
        <div className="fixed-top-container image">
          <img height="120px" src={Image} alt="GDSC BITS" />
        </div>
        <div className="sidebar__content">
          <ul className="sidebar__links">
            <NavItem to="/">
              <AiFillHome style={{ marginRight: '0.5rem' }} />
              <p>Home</p>
            </NavItem>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">Home</NavItem>
          </ul>
        </div>
        <footer className="fixed-bottom-container">
          <p className="faded-text">
            MIT License
            <br />
            By GDSC BIT, Sindri
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Sidebar;
