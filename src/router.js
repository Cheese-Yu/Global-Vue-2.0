import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './router/home.vue'
import Works from './router/works.vue'
import About from './router/about.vue'
import Contact from './router/contact.vue'
import Us from './router/us.vue'

Vue.use(VueRouter);

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'works', path: '/works', component: Works },
  { name: 'about', path: '/about', component: About },
  { name: 'contact', path: '/contact', component: Contact },
  { name: 'us', path: '/us', component: Us}
]

const router = new VueRouter({
  routes
});
export default router
