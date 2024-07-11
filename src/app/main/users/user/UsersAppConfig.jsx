import { lazy } from 'react';
import ContactView from './contact/ContactView';
import ContactForm from './contact/ContactForm';
// import { authRoles } from 'src/app/auth';
import authRoles from '../../../auth/authRoles';

const ContactsApp = lazy(() => import('./ContactsApp'));
/**
 * The ContactsApp configuration.
 */
const UsersAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	// auth: authRoles.admin,
	routes: [
		{
			path: 'users/user',
			element: <ContactsApp />,
			children: [
				{
					path: ':id',
					element: <ContactView />
				},
				{
					path: ':id/edit',
					element: <ContactForm />
				}
			]
		}
	]
};
export default UsersAppConfig;
