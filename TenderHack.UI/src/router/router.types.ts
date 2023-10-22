import type { VueElement } from "vue";
import type { AppLayoutsEnum } from "../layouts/layouts.types";

declare module "vue-router" {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}

export enum RouteNamesEnum {
  home = "home",
  logs = "logs",
  dashboard = "dashboard",
  cluster = "cluster",
  demo = "demo",
}
