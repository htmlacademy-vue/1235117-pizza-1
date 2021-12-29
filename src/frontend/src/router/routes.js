export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index.vue"),
    meta: { layout: "AppLayoutDefault" },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
        meta: { layout: "AppLayoutDefault" },
      },
    ],
  },
  {
    path: "/cart/",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/orders/",
    name: "Orders",
    component: () => import("../views/Orders.vue"),
  },
  {
    path: "/profile/",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
];
