import Cookie from 'js-cookie';
import homesServerConfig from '../configServerRoutes/homesServerConfig';
import jwtAuthConfig from 'src/app/auth/services/jwt/jwtAuthConfig';

export const setUserForgotPassCreedStorage = (userForgotPassCredentialsTk) => {
    console.log("UserForgotPassCredentialsTk TO-SET", userForgotPassCredentialsTk)
    // Cookie.set(homesServerConfig.studentForgotPassTk, JSON.stringify({ userForgotPassCredentialsTk }))

    // Cookie.set(homesServerConfig.studentForgotPassTk, userForgotPassCredentialsTk)

    localStorage.setItem(homesServerConfig.studentForgotPassTk, userForgotPassCredentialsTk)
    
    
};

export const getForgotPassToken = () => {
    return localStorage.getItem(homesServerConfig.studentForgotPassTk);
};

export const resetForgotPassToken = () => {
    return localStorage.removeItem(homesServerConfig.studentForgotPassTk);
};



export const getAdminAccessToken = () => {
    return localStorage.getItem(jwtAuthConfig.tokenStorageKey);
};


/****LOGGING OUT AN ADMIN USER */
export const logOutAdminUser = () => {
    return localStorage.removeItem(homesServerConfig.studentForgotPassTk);
};