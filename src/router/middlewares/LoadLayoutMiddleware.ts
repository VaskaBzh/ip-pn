import { LayoutsEnum } from "@/layouts";
import { RouteLocationNormalized } from "vue-router";
import { getEnumValue } from "@/utils";

export async function LoadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
  const layoutName: string | undefined = getEnumValue(LayoutsEnum, route.meta.layout as string, LayoutsEnum.main);

  route.meta.layoutComponent = (await import(`../../layouts/${layoutName}.vue`)).default;
}