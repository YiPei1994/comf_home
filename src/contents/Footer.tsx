import Block from '../components/Block';
import Copyright from '../components/Copyright';
import List from '../components/List';
import SignUp from '../components/SignUp';
import Socials from '../components/Socials';
import { menu, navlinks, categories } from '../utils/Data';

function Footer() {
  return (
    <Block className="bg-darkprimary  xl:flex-row xl:flex-wrap xl:items-stretch xl:gap-0">
      <div className="flex w-full flex-wrap justify-between md:flex-nowrap xl:w-1/2 xl:items-start xl:pb-20">
        <List lists={categories}>
          <h4>Categories</h4>
        </List>
        <List lists={menu}>
          <h4>Menu</h4>
        </List>
        <List lists={navlinks}>
          <h4>Our company</h4>
        </List>
      </div>
      <div className="w-full xl:w-1/2 xl:items-start xl:pb-20">
        <h4 className="text-side">Join our mailing list</h4>
        <SignUp invert={true} />
      </div>
      <div className="w-full border-t border-[#4e4d93] py-4 xl:flex xl:items-center xl:justify-between">
        <Copyright />
        <Socials />
      </div>
    </Block>
  );
}

export default Footer;
