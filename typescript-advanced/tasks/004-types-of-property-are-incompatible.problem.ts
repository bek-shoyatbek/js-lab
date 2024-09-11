// 1. Solution
const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "AboutComponent", // ! 12 is not component
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes(routingConfig);

// 2. Solution
const routingConfig1 = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes1 = (config: {
  routes: {
    path: string;
    component: string | number;  // ! union type can also be used to fix error
  }[];
}) => {};

createRoutes1(routingConfig1);
