import Logo from '../components/Logo';

import { RxHamburgerMenu } from 'react-icons/rx';
import Navbar from './Navbar';
import { useNavbar } from '../store/Navbarstore';
import User from '../components/User';
import Search from '../components/Search';
import Cart from '../components/Cart';

function MainNav() {
  const { setShowNavbar } = useNavbar();

  return (
    <div className="relative flex flex-wrap items-center justify-between gap-4 px-6 pt-6 md:justify-between">
      <Search className="ml-0 hidden md:block xl:text-2xl" />
      <Logo />
      <div className="flex gap-4">
        <Search />
        <Cart />
        <User />
        <RxHamburgerMenu
          className="block md:hidden"
          onClick={() => setShowNavbar()}
        />
      </div>
      <Navbar />
    </div>
  );
}

export default MainNav;
