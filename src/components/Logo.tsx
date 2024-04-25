import { Link } from '@tanstack/react-router';
import Image from './Image';

function Logo() {
  return (
    <div className="w-18">
      <Link to="/">
        <Image src="/web/Avion.svg" alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
