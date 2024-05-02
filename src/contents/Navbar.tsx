import { Link } from '@tanstack/react-router';
import { useNavbar } from '../store/Navbarstore';

function Navbar() {
  const { showNavbar } = useNavbar();
  return (
    <div
      className={`text-darkprimary flex w-full flex-col items-center justify-center gap-4  transition-all duration-300 md:flex-row md:border-t md:py-4  xl:py-6 ${showNavbar ? 'py-6 max-md:max-h-[350px] max-md:opacity-100 ' : 'max-md:max-h-0 max-md:opacity-0'}`}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
