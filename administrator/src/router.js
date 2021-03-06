import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import Payment from "@/components/Payment.vue"
import History from "@/components/History.vue"
import Reservation from "@/components/Reservation.vue"
import Chart from "@/components/Chart.vue"
// import Payment2 from "@/components/payment2.vue"


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path:'/history',
          component:History
        },
        {
          path: '/payment',
          component: Payment
        },
        {
          path: '/reservation',
          component: Reservation
        },
        {
          path:'/chart',
          component: Chart
        }
       
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
