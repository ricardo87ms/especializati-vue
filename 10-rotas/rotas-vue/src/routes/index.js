import HomeComponent from '../components/HomeComponent';
import ProductsComponent from '../components/ProductsComponent';
import TasksComponent from '../components/TasksComponent';
import Error404Component from '../components/Error404Component';

export default [
  { path: '/', component: HomeComponent },
  {
    path: '/produtos/:id',
    name: 'produtos',
    component: ProductsComponent,
    props: true,
  },
  { path: '/tarefas/:id', name: 'tarefas', component: TasksComponent },
  { path: '/redirect', redirect: '/produtos/1' },
  { path: '*', name: 'error404', component: Error404Component },
];
