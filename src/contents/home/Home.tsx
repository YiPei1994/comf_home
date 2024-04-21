import { createPortal } from 'react-dom';
import Welcome from './Welcome';
import Hero from './Hero';

function Home() {
  return (
    <div className="">
      {createPortal(<Welcome />, document.body)}
      <Hero />
    </div>
  );
}

export default Home;
