import Button from '../../components/Button';
import Container from '../../components/Container';

function Hero() {
  return (
    <Container className="relative">
      <div className="mx-auto flex flex-col gap-6 bg-white px-6 py-12 md:absolute md:right-[10%] md:top-[50%] md:w-2/4 md:-translate-y-[50%]  lg:px-16 lg:py-16 xl:right-[5%]">
        <h1 className="md:mb-[5%] xl:mb-[15%] xl:text-[32px]">
          Luxury homeware for people who love timeless design quality
        </h1>
        <p>
          With our new collection, view over 400 bespoke pieces from homeware
          through to furniture today
        </p>
        <Button
          className=" px-6 py-3 transition-all duration-300 md:w-fit"
          type="button"
        >
          View collection
        </Button>
      </div>
      <div className="h-[380px] w-full  bg-[url('/web/hero.jpg')]  bg-cover bg-center bg-no-repeat md:h-[50vh] lg:h-[704px]"></div>
    </Container>
  );
}

export default Hero;
