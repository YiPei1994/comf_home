import Block from '../../components/Block';
import Button from '../../components/Button';
import Image from '../../components/Image';

function KnowMe() {
  return (
    <Block className="lg:flex-row lg:items-stretch lg:gap-4">
      <div className="bg-darkprimary flex flex-col gap-6 p-8 lg:w-1/2">
        <h4 className="text-side">It started with a small idea</h4>
        <p className="text-side">
          A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014
        </p>
        <Button className="text-side bg-primary hover:bg-side hover:text-primary lg:mt-auto">
          View collection
        </Button>
      </div>
      <div className="lg:w-1/2">
        <Image src="/web/knowImage.svg" alt="know image" />
      </div>
    </Block>
  );
}

export default KnowMe;
