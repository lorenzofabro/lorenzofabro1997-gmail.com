import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import Features from "../views/Features";
import Stats from "../views/Stats";
import Blog from "../views/Blog";
import Contact from "../views/Contact";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Nexos';
  next();
})

export default router;
