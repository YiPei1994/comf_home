import { createFileRoute } from '@tanstack/react-router';

import { useWelcomeWindow } from '../store/WelcomeWindow';
import Welcome from '../contents/home/Welcome';
import { createPortal } from 'react-dom';
import Hero from '../contents/home/Hero';
import Features from '../contents/home/Features';
import ProductList from '../contents/home/ProductList';
import KnowMe from '../contents/home/KnowMe';
import Contact from '../contents/home/Contact';

export const Route = createFileRoute('/')({
  component: () => <Home />,
});

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
