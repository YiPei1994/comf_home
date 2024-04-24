import { Link } from '@tanstack/react-router';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquarePinterest } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

function Socials() {
  return (
    <ul className="hidden w-fit items-center self-end xl:flex xl:gap-4">
      <li>
        <Link to="">
          <FaSquareInstagram className="h-6 w-6 text-white" />
        </Link>
      </li>
      <li>
        <Link to="">
          <FaSquarePinterest className="h-6 w-6 text-white" />
        </Link>
      </li>
      <li>
        <Link to="">
          <FaSquareFacebook className="h-6 w-6 text-white" />
        </Link>
      </li>
      <li>
        <Link to="">
          <FaSquareXTwitter className="h-6 w-6 text-white" />
        </Link>
      </li>
      <li>
        <Link to="">
          <FaLinkedin className="h-6 w-6 text-white" />
        </Link>
      </li>
    </ul>
  );
}

export default Socials;
