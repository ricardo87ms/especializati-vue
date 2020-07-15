import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/HomeComponent';
import TasksComponent from '../components/tasks/TasksComponent';

const routes = [
  { path: '/', name: 'home', component: HomeComponent },
  { path: '/tarefas', name: 'tarefas', component: TasksComponent },
];

// Vue Router
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
});
