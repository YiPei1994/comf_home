import { createPortal } from 'react-dom';
import Welcome from './Welcome';
import Hero from './Hero';
import Features from './Features';
import ProductList from './ProductList';
import KnowMe from './KnowMe';
import Contact from './Contact';
import { useWelcomeWindow } from '../../store/WelcomeWindow';

function Home() {
  const { show } = useWelcomeWindow();
  return (
    <>
      {createPortal(<Welcome />, document.body)}
      {!show && (
        <div className="overflow-hidden">
          <Hero />
          <Features />
          <ProductList />
          <KnowMe />
          <Contact />
        </div>
      )}
    </>
  );
}

export default Home;
