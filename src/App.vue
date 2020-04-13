<template>
  <v-app>
    <Appbar />
    <v-content>
      <Home />
      <About />
      <Features />
      <Stats />
      <Blog />
      <Contact />
      <Footer />
    </v-content>
    <BottomNavigation />
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import BottomNavigation from "./components/BottomNavigation";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Features from "./views/Features";
import Stats from "./views/Stats";
import Blog from "./views/Blog";
import Contact from "./views/Contact";

export default {
  name: "App",

  components: {
    Appbar,
    Home,
    About,
    Features,
    Stats,
    Blog,
    Footer,
    Contact,
    BottomNavigation
  },

  data: () => ({
    //
  })
};
</script>
