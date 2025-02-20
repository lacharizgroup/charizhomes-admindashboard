import { lazy } from 'react';
import ContactView from './contact/ContactView';
import ContactForm from './contact/ContactForm';

const ContactsApp = lazy(() => import('./ContactsApp'));
/**
 * The ContactsApp configuration.
 */

const ContactsAppConfig = {
	settings: {
		layout: {
			config: {}
			// config: {
			// 	navbar: {
			// 		display: true
			// 	},
			// 	toolbar: {
			// 		display: true
			// 	},
			// 	footer: {
			// 		display: false
			// 	},
			// 	leftSidePanel: {
			// 		display: false
			// 	},
			// 	rightSidePanel: {
			// 		display: false
			// 	}
			// }
		}
	},
	routes: [
		{
			path: 'apps/contacts',
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
export default ContactsAppConfig;
