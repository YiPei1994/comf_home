import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Footer from '../contents/Footer';
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
