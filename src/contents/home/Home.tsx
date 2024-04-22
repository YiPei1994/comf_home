import { createPortal } from 'react-dom';
import Welcome from './Welcome';
import Hero from './Hero';
import Features from './Features';
import ProductList from './ProductList';

function Home() {
  return (
    <div className="">
      {createPortal(<Welcome />, document.body)}
      <Hero />
      <Features />
      <ProductList />
    </div>
  );
}

export default Home;
