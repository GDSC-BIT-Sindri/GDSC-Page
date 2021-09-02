import { NavLink } from 'react-router-dom';
import { PrimaryBlue } from '../../config/Color';

export const NavItem = ({ children, to, ...otherProps }) => {
  return (
    <li {...otherProps} className="nav__item">
      <NavLink to={to} exact activeStyle={{ color: PrimaryBlue }}>
        <div style={ROW}>{children}</div>
      </NavLink>
    </li>
  );
};

const ROW = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};
