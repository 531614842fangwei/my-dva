const routerTree = [
  {
    path: 'home',
    models: () => [import('../models/home')],
    component: () => import('../routes/home'),
  },
  {
    path: 'list',
    models: () => [import('../models/list')],
    component: () => import('../routes//list'),
  },
]
export default routerTree
