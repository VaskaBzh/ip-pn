import { routes } from "./routes/routes";
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
} from "vue-router";
import middlewares from "./middlewares";

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): Promise<void> => {
  const routeMiddleware: string[] = to.meta.middlewares as string[]

  if (!routeMiddleware) {
    next();
  }

  const middlewareFunctions: Array<(...args: unknown[]) => unknown> = routeMiddleware.map(
    (name: string) => middlewares[name]
  );

  for (let i: number = 0; i < middlewareFunctions.length; i++) {
    await middlewareFunctions[i](to, router, from);
  }

  next();
})

export { router };