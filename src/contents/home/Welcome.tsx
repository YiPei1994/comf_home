import { MdArrowUpward } from 'react-icons/md';
import Button from '../../components/Button';
import { useWelcomeWindow } from '../../store/WelcomeWindow';
import RotatingProducts from '../../components/ProductCard';
import { shuffleProduct } from '../../utils/helper';
import { productsData } from '../../utils/Data';

function Welcome() {
  const { show, setShow } = useWelcomeWindow();

  const generated = shuffleProduct(productsData, 5);

  return (
    <div
      className={`${show ? 'top-0' : '-top-full'} absolute left-0 z-40 flex  h-screen  w-full  flex-col items-center justify-center overflow-hidden bg-neutral-900  transition-all duration-300`}
    >
      <div className="flex h-full flex-col items-center justify-center gap-6 px-4 py-[40px] text-center xl:gap-12 xl:py-[80px]">
        <h3 className="text-primary ">Welcome</h3>
        <h2 className="bold bold text-white">
          Find your own piece of <span className="text-purple-200">Art</span>
        </h2>
        <RotatingProducts products={generated} />
        <Button
          onClick={() => setShow()}
          className="text-primary mt-[50px]  bg-transparent  text-4xl  hover:bg-transparent hover:text-white lg:mt-[30px] xl:mt-0 "
          type="button"
        >
          <MdArrowUpward className="animate-bounce" />
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
