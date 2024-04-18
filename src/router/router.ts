import { routes } from "./routes/routes";
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  Router,
  RouteRecordNormalized
} from "vue-router";
import * as middlewares from "./middlewares";

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to: RouteRecordNormalized, from: RouteRecordNormalized, next: NavigationGuardNext) => {
  const routeMiddleware: string[] = to.meta.middlewares

  if (!routeMiddleware) {
    return next();
  }

  const middlewareFunctions: Array<(...args: unknown[]) => unknown> = routeMiddleware.map(
    (name: string) => middlewares.default[name]
  );

  for (let i: number = 0; i < middlewareFunctions.length; i++) {
    await middlewareFunctions[i](to, router);
  }

  next();
})

export { router };