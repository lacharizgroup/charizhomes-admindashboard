// const baseUrl = 'http://localhost:8007'
const baseUrl = 'https://sea-turtle-app-c6p3o.ondigitalocean.app'


const jwtAuthConfig = {
	tokenStorageKey: 'jwt_access_token',
	signInUrl: 'mock-api/auth/sign-in',
	signUpUrl: 'mock-api/auth/sign-up',
	tokenRefreshUrl: 'mock-api/auth/refresh',
	getUserUrl: 'mock-api/auth/user',
	updateUserUrl: 'mock-api/auth/user',
	updateTokenFromHeader: true,


	/******Bravort Admin Dashboard Controls API */
	signInBravortAdminUrl: `${baseUrl}/admin/login`,
	getAuthAdminInBravortAdminUrl: `${baseUrl}/admin/get-auth-admin`,
	isAuthenticatedStatus: 'jwt_is_authenticated_status',
	authStatus: 'jwt_is_authStatus',
	adminCredentials: 'jwt_auth_credentials',

};
export default jwtAuthConfig;


