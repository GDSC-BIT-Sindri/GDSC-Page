import { useRef, useState } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Screen = ({ children }) => {
	const [openSidebar, setOpenSidebar] = useState(false);
	const navRef = useRef(null);
	return (
		<>
			<Navbar navControl={() => setOpenSidebar(!openSidebar)} ref={navRef} />
			<Sidebar
				setClose={() => setOpenSidebar(false)}
				open={openSidebar}
				navRef={navRef}
			/>
			{children}
			<Footer />
		</>
	);
};

export default Screen;
