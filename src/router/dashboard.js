import DashboardContainer from '@/layouts/dashboard/DashboardContainer.vue';
import DashboardIndex from '@/views/dashboard/DashboardIndex.vue';
import ProjectsPage from '@/views/dashboard/projects/ProjectsPage.vue';

const dashboardRoutes = [
    {
        path: '/',
        name: 'DashboardContainer',
        component: DashboardContainer,
        children: [
            {
            path: '',
            name: 'DashboardIndex',
            component: DashboardIndex
            },
            {
            path: 'projects',
            name: 'ProjectsPage',
            component: ProjectsPage
            },
        ]
    },
]

export default dashboardRoutes;