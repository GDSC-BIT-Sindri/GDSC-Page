import { AiFillHome } from 'react-icons/ai';
import Image from '../../assets/images/Logo-with-name.png';
import { NavItem } from '../Navbar/NavItem';
import { BsFillPeopleFill, BsFillInfoSquareFill } from 'react-icons/bs';
import { useEffect, useRef } from 'react';

const Sidebar = ({ open, setClose, navRef }) => {
	const sidebarRef = useRef(null);
	useEffect(() => {
		const handleBodyClick = (e) => {
			if (
				sidebarRef.current.contains(e.target) ||
				navRef.current.contains(e.target)
			)
				return;
			setClose();
		};

		document.body.addEventListener('click', handleBodyClick);

		return () => {
			document.body.removeEventListener('click', handleBodyClick);
		};
	}, [setClose, navRef]);

	return (
		<section
			className={`sidebar ${open ? 'sidebar-show' : ''} `}
			ref={sidebarRef}
		>
			<div className={`sidebar__container ${open ? 'show-content' : ''}`}>
				<div className='image'>
					<img height='120px' src={Image} alt='GDSC BITS' />
				</div>
				<div className='sidebar__content'>
					<ul className='sidebar__links'>
						<NavItem onClick={setClose} to='/'>
							<AiFillHome style={{ marginRight: '0.5rem' }} />
							<p>Home</p>
						</NavItem>
						<NavItem onClick={setClose} to='/events'>
							<BsFillInfoSquareFill style={{ marginRight: '0.5rem' }} />
							Events
						</NavItem>
						<NavItem onClick={setClose} to='/teams'>
							<BsFillPeopleFill style={{ marginRight: '0.5rem' }} />
							Teams
						</NavItem>
					</ul>
				</div>
				<footer className='fixed-bottom-container text-center w-100'>
					<p className='faded-text'>
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
