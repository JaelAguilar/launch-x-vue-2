import { createRouter, createWebHashHistory } from "vue-router"
import ClienteView from "../views/ClienteView.vue"
import PasteleroView from "../views/PasteleroView.vue"
import ContactoView from "../views/ContactoView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: ClienteView,
  },
  {
    path: "/user",
    name: "user",
    component: PasteleroView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactoView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
