import { createFileRoute } from '@tanstack/react-router';

import Home from '../contents/home/Home';

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Home />
    </>
  ),
});
