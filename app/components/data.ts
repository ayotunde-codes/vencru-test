import { IntLinksObject } from "../../typings";

export const linksData: IntLinksObject[] = [
  {
    name: "Home",
    url: "/",
    logo: "/assets/icons/home.svg",
    notification: false,
    slug: "home",
  },
  {
    name: "Dashboard",
    url: "/",
    logo: "/assets/icons/dashboard.svg",
    notification: true,
    slug: "dashboard",
  },
  {
    name: "Project",
    url: "/",
    logo: "/assets/icons/layers.svg",
    notification: false,
    slug: "project",
  },
  {
    name: "Task",
    url: "/",
    logo: "/assets/icons/check-square.svg",
    notification: false,
    slug: "task",
  },
  {
    name: "Reporting",
    url: "/",
    logo: "/assets/icons/flag.svg",
    notification: false,
    slug: "reporting",
  },
  {
    name: "Users",
    url: "/",
    logo: "/assets/icons/users.svg",
    notification: false,
    slug: "users",
  },
  {
    name: "Support",
    url: "/",
    logo: "/assets/icons/life-buoy.svg",
    notification: false,
    slug: "support",
  },
  {
    name: "Settings",
    url: "/settings",
    logo: "/assets/icons/settings.svg",
    notification: false,
    slug: "settings",
  },
];

export const settingLinksData: Pick<IntLinksObject, "name" | "url" | "slug">[] =
  [
    {
      name: "My Details",
      url: "/settings",
      slug: "my-details",
    },
    {
      name: "Profile",
      url: "/settings",
      slug: "profile",
    },
    {
      name: "Password",
      url: "/settings",
      slug: "password",
    },
    {
      name: "Team",
      url: "/settings",
      slug: "team",
    },
    {
      name: "Plan",
      url: "/settings",
      slug: "plan",
    },
    {
      name: "Billing",
      url: "/settings/billing",
      slug: "billing",
    },
    {
      name: "Notification",
      url: "/settings",
      slug: "notification",
    },
    {
      name: "Integration",
      url: "/settings",
      slug: "integration",
    },
    {
      name: "API",
      url: "/settings",
      slug: "api",
    },
  ];

export const cardData = [
  {
    logo: "/assets/icons/visa.svg",
    ending: "Visa ending in 1234",
    expireDate: "Expiry 06/2024",
    name: "visa",
  },
  {
    logo: "/assets/icons/mastercard.svg",
    ending: "Mastercard ending in 1234",
    expireDate: "Expiry 06/2024",
    name: "mastercard",
  },
];

export const tableDatas = [
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: false,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: false,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: false,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: false,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },

      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
  {
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    paid: true,
    avatars: [
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
      {
        picture: "/assets/icons/Avatar.svg",
      },
    ],
  },
];
