import Block from '../../components/Block';
import { CiCircleCheck } from 'react-icons/ci';
import SignUp from '../../components/SignUp';

function Contact() {
  return (
    <Block className="bg-[url('/web/contactImage.svg')] bg-cover bg-center bg-no-repeat">
      <div className="text-side mx-auto flex max-w-[500px] flex-col gap-6 md:text-center">
        <h2>Join the club and get the benefits</h2>
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          <li className="flex items-center gap-3">
            <CiCircleCheck className="h-6 w-6" />
            <span>Exclusive offers</span>
          </li>
          <li className="flex items-center gap-3">
            <CiCircleCheck className="h-6 w-6" />
            <span>Free events</span>
          </li>
          <li className="flex items-center gap-3">
            <CiCircleCheck className="h-6 w-6" />
            <span>Large discounts</span>
          </li>
        </ul>
        <SignUp />
      </div>
    </Block>
  );
}

export default Contact;
