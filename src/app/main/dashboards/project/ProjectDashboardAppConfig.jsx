import { lazy } from 'react';

const ProjectDashboardApp = lazy(() => import('./ProjectDashboardApp'));
/**
 * The ProjectDashboardApp configuration.
 */
const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/project',
			element: <ProjectDashboardApp />
		}
	]
};
export default ProjectDashboardAppConfig;

