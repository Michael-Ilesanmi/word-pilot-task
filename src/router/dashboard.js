import DashboardContainer from '@/layouts/dashboard/DashboardContainer.vue';
import DashboardIndex from '@/views/dashboard/DashboardIndex.vue';

const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'DashboardContainer',
        component: DashboardContainer,
        children: [
            {
            path: '',
            name: 'DashboardIndex',
            component: DashboardIndex
            },
        ]
    },
]

export default dashboardRoutes;