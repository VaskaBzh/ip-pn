import { enums } from "@/layouts";
import { RouteRecordNormalized } from "vue-router";
import { AsyncComponentLoader, Component } from "vue";

export async function LoadLayoutMiddleware(route: RouteRecordNormalized): Promise<void> {
  const layout: string = route.meta.layout ?? "main";
  const layoutName: string = enums.LayoutsEnum[layout];

  const component: AsyncComponentLoader<Component> = await import(`../../layouts/${layoutName}.vue`);
  route.meta.layoutComponent = component.default;
}