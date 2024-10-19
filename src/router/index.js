import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/jobs", name: "jobs", component: JobsView },
  { path: "/job/:id", name: "job", component: JobView },
  { path: "/:catchAll(.*)", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;