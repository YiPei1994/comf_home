import { createFileRoute } from '@tanstack/react-router';
import About from '../contents/about/About';

export const Route = createFileRoute('/about')({
  component: () => <About />,
});
