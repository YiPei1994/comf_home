import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Footer from '../contents/Footer';
import MainNav from '../contents/MainNav';
export const Route = createRootRoute({
  component: () => (
    <>
      <MainNav />

      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
