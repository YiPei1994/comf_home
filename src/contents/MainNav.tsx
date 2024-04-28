import Logo from '../components/Logo';

import { RxHamburgerMenu } from 'react-icons/rx';
import Navbar from './Navbar';
import { useNavbar } from '../store/Navbarstore';
import User from '../components/User';
import Search from '../components/Search';

function MainNav() {
  const { showNavbar, setShowNavbar } = useNavbar();
  return (
    <div className="relative flex flex-wrap items-center gap-4 px-6 pt-6 md:justify-between">
      <Search className="ml-0 hidden md:block xl:text-2xl" />
      <Logo />
      <Search className={`${showNavbar ? '' : 'pointer-events-none'}`} />
      <RxHamburgerMenu
        className="block md:hidden"
        onClick={() => setShowNavbar()}
      />
      <User className="hidden md:flex" />
      <Navbar />
    </div>
  );
}

export default MainNav;
