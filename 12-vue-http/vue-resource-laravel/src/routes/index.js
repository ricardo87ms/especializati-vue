import HomeComponent from '../components/home/HomeComponent';
import ProductsComponent from '../components/products/ProductsComponent';
import ProductCreateComponent from '../components/products/ProductCreateComponent';
import ProductEditComponent from '../components/products/ProductEditComponent';

export default [
  { path: '/', name: 'home', component: HomeComponent },
  { path: '/produtos', name: 'produtos', component: ProductsComponent },
  {
    path: '/produtos/create',
    name: 'produtos/create',
    component: ProductCreateComponent,
  },
  {
    path: '/produtos/:id/edit',
    name: 'produtos.edit',
    component: ProductEditComponent,
    props: true,
  },
  // {
  //   path: '/produtos/:id',
  //   name: 'produtos',
  //   component: ProductsComponent,
  //   props: true,
  // },
  // { path: '/tarefas/:id', name: 'tarefas', component: TasksComponent },
  // { path: '/redirect', redirect: '/produtos/1' },
  // { path: '*', name: 'error404', component: Error404Component },
];
