import { LayoutsEnum } from "@/layouts";
import { RouteLocationNormalized } from "vue-router";

export async function LoadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
  const layoutName: string = LayoutsEnum[route.meta.layout as keyof typeof LayoutsEnum];

  route.meta.layoutComponent = (await import(`../../layouts/${layoutName}.vue`)).default;
}