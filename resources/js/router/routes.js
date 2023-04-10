import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'
import DashboardIndex from '@/pages/dashboard/index.vue'

const routes = [
    { path: '/', name: 'index', component: Index },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/dashboard', name: 'dashboard.index', component: DashboardIndex },
  ]

export default routes