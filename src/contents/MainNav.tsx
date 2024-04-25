import Logo from '../components/Logo';
import { MdSearch } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import Navbar from './Navbar';
import { useNavbar } from '../store/Navbarstore';
import User from '../components/User';

function MainNav() {
  const { setShowNavbar } = useNavbar();
  return (
    <div className="flex flex-wrap items-center gap-4 px-6 pt-6 md:justify-between">
      <MdSearch className="hidden md:block xl:text-2xl" />
      <Logo />
      <MdSearch className="ml-auto md:hidden" />
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
