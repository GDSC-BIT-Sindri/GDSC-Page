import { BlueButton } from '../Buttons/Buttons';
import { NavItem } from './NavItem';
import Logo from '../../assets/images/hllogo.png';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { forwardRef, useEffect } from 'react';
import { join } from '../Data/socials';
import { Link } from 'react-router-dom';

const Navbar = ({ navControl }, ref) => {
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
	}, []);
	return (
		<nav
			id='navbar'
			className='navbar fixed-top navbar-expand-lg navbar-transparent'
		>
			<div className='container'>
				<div className='navabr__translate'>
					<Link className='navbar__brand' to='/'>
						<img height='30px' src={Logo} alt='DSC BIT' />
					</Link>
				</div>
				<nav className='collapse navbar__collapse'>
					<ul className='navbar__nav ml-auto'>
						<NavItem to='/'>Home</NavItem>
						<NavItem to='/events'>Events</NavItem>
						<NavItem to='/teams'>Teams</NavItem>
						<BlueButton style={{ margin: '0 0 0 14px' }} link={join}>
							Join Us
						</BlueButton>
					</ul>
				</nav>
				<div
					className='navbar__collapsible-btn ml-auto'
					onClick={navControl}
					ref={ref}
				>
					<AiOutlineAlignRight size={24} />
				</div>
			</div>
		</nav>
	);
};

export default forwardRef(Navbar);
