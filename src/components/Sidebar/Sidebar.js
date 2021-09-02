import { AiFillHome } from 'react-icons/ai';
import Image from '../../assets/images/Logo-with-name.png';
import { NavItem } from '../Navbar/NavItem';
import { BsFillPeopleFill, BsFillInfoSquareFill } from 'react-icons/bs';

const Sidebar = ({ open }) => {
  return (
    <section className={`sidebar ${open ? 'sidebar-show' : ''} `}>
      <div className={`sidebar__container ${open ? 'show-content' : ''}`}>
        <div className="image">
          <img height="120px" src={Image} alt="GDSC BITS" />
        </div>
        <div className="sidebar__content">
          <ul className="sidebar__links">
            <NavItem to="/">
              <AiFillHome style={{ marginRight: '0.5rem' }} />
              <p>Home</p>
            </NavItem>
            <NavItem to="/events">
              <BsFillInfoSquareFill style={{ marginRight: '0.5rem' }} />
              Events
            </NavItem>
            <NavItem to="/teams">
              <BsFillPeopleFill style={{ marginRight: '0.5rem' }} />
              Teams
            </NavItem>
          </ul>
        </div>
        <footer className="fixed-bottom-container text-center w-100">
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
