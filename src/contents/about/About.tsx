import BlockWithImage from '../../components/BlockWithImage';
import Button from '../../components/Button';
import Image from '../../components/Image';
import PageHeader from '../../components/PageHeader';
import Contact from '../home/Contact';
import Features from '../home/Features';

function About() {
  return (
    <div>
      <PageHeader>
        <h1>
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>
      </PageHeader>
      <div className="flex flex-col items-stretch justify-stretch">
        <BlockWithImage>
          <div className="flex flex-col gap-4 p-6 md:w-1/2 md:items-start md:justify-start md:px-8 md:py-0 lg:px-8 lg:py-0 xl:px-12">
            <h3 className="w-3/4 md:w-full lg:mt-6 xl:mt-10">
              From a studio in London to a global brand with over 400 outlets
            </h3>
            <p>
              {' '}
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>

            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <Button className="bg-side text-darkprimary hover:text-side my-8 md:mb-4 md:mt-auto lg:mb-8">
              Get in touch
            </Button>
          </div>
          <div className="h-full overflow-hidden md:w-1/2">
            <Image src="/web/aboutOne.jpg" alt="image about" />
          </div>
        </BlockWithImage>
        <BlockWithImage reverse={true}>
          <div className="flex flex-col gap-4 p-6 md:w-1/2 md:items-start md:justify-start md:px-8 md:py-0 lg:px-8 lg:py-0 xl:px-12">
            <h3 className="w-3/4 md:w-full lg:mt-6 xl:mt-10">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </h3>
            <p>
              {' '}
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>

            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <Button className="bg-side text-darkprimary hover:text-side my-8 md:mb-4 md:mt-auto lg:mb-8">
              Get in touch
            </Button>
          </div>
          <div className="h-full overflow-hidden md:w-1/2">
            <Image src="/web/aboutTwo.jpg" alt="image about" />
          </div>
        </BlockWithImage>
      </div>
      <Features />
      <Contact />
    </div>
  );
}

export default About;
