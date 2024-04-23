import { createPortal } from 'react-dom';
import Welcome from './Welcome';
import Hero from './Hero';
import Features from './Features';
import ProductList from './ProductList';
import KnowMe from './KnowMe';
import Contact from './Contact';

function Home() {
  return (
    <div className="">
      {createPortal(<Welcome />, document.body)}
      <Hero />
      <Features />
      <ProductList />
      <KnowMe />
      <Contact />
    </div>
  );
}

export default Home;
