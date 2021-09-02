import { useState } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Screen = ({ children }) => {
  const [openSidebar, setOpenSiderbar] = useState(false);
  return (
    <>
      <Navbar
        navControl={() =>
          setOpenSiderbar((setOpenSiderbar) => !setOpenSiderbar)
        }
      />
      <Sidebar setClose={() => setOpenSiderbar(false)} open={openSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Screen;
