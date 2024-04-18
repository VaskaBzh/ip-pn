import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: async (): Promise<Component> => await import("../../pages/MainPage.vue"),
    meta: {
      middlewares: ["LoadLayoutMiddleware"],
      layout: "main",
    },
  },
  {
    path: "/documentation",
    name: "documentation",
    component: async (): Promise<Component> => await import("../../pages/DocumentationPage.vue"),
    meta: {
      middlewares: ["LoadLayoutMiddleware"],
      layout: "main",
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: async (): Promise<Component> => await import("../../pages/ContactsPage.vue"),
    meta: {
      middlewares: ["LoadLayoutMiddleware"],
      layout: "main",
    },
  },
  {
    path: "/login",
    name: "login",
    component: async (): Promise<Component> => await import("../../pages/LoginPage.vue"),
    meta: {
      middlewares: ["LoadLayoutMiddleware"],
      layout: "main",
    },
  },
  {
    path: "/catalog",
    name: "catalog",
    query: {
      search: "",
    },
    component: async (): Promise<Component> => await import("../../pages/CatalogPage.vue"),
    meta: {
      middlewares: ["LoadLayoutMiddleware"],
      layout: "main",
    },
  },
]