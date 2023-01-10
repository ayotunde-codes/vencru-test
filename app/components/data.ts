import { IntLinksObject } from "../../typings";

export const linksData: IntLinksObject[] = [
  {
    name: "Home",
    url: "/",
    logo: "/assets/icons/home.svg",
    notification: false,
  },
  {
    name: "Dashboard",
    url: "/",
    logo: "/assets/icons/dashboard.svg",
    notification: true,
  },
  {
    name: "Project",
    url: "/",
    logo: "/assets/icons/layers.svg",
    notification: false,
  },
  {
    name: "Task",
    url: "/",
    logo: "/assets/icons/check-square.svg",
    notification: false,
  },
  {
    name: "Reporting",
    url: "/",
    logo: "/assets/icons/flag.svg",
    notification: false,
  },
  {
    name: "Users",
    url: "/",
    logo: "/assets/icons/users.svg",
    notification: false,
  },
  {
    name: "Support",
    url: "/",
    logo: "/assets/icons/life-buoy.svg",
    notification: false,
  },
  {
    name: "Settings",
    url: "/settings",
    logo: "/assets/icons/settings.svg",
    notification: false,
  },
];

export const settingLinksData: Pick<IntLinksObject, "name" | "url">[] = [
  {
    name: "My Details",
    url: "/settings",
  },
  {
    name: "Profile",
    url: "/settings",
  },
  {
    name: "Password",
    url: "/settings",
  },
  {
    name: "Team",
    url: "/settings",
  },
  {
    name: "Plan",
    url: "/settings",
  },
  {
    name: "Billing",
    url: "/settings/billing",
  },
  {
    name: "Notification",
    url: "/settings",
  },
  {
    name: "Integration",
    url: "/settings",
  },
  {
    name: "API",
    url: "/settings",
  },
];
