import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Button from '../components/Button';
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Button link="/" type="link">
          Home
        </Button>
        <Button link="/about" type="link">
          About
        </Button>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
