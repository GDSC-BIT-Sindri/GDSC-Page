import { BlueButton } from '../Buttons/Buttons';
import { NavItem } from './NavItem';
import Logo from '../../assets/images/GDSC-Logo.png';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { useEffect } from 'react';

const Navbar = ({ navControl }) => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const navSelect = document.getElementById('navbar');
      const height = navSelect.offsetHeight;

      const scroll = window.scrollY;

      if (scroll > height) {
        navSelect.classList.remove('navbar-transparent');
      } else {
        navSelect.classList.add('navbar-transparent');
      }
    });

    return () => document.removeEventListener('scroll', null);
  });
  return (
    <nav
      id="navbar"
      className="navbar fixed-top navbar-expand-lg navbar-transparent"
    >
      <div className="container">
        <div className="navabr__translate">
          <a className="navbar__brand" href="/">
            <img height="50px" src={Logo} alt="DSC BIT" />
          </a>
        </div>
        <nav className="collapse navbar__collapse">
          <ul className="navbar__nav ml-auto">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/events">Events</NavItem>
            <NavItem to="/teams">Teams</NavItem>
            <BlueButton style={{ margin: '0 0 0 14px' }} link="/">
              Join Us
            </BlueButton>
          </ul>
        </nav>
        <div className="navbar__collapsible-btn ml-auto" onClick={navControl}>
          <AiOutlineAlignRight size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
