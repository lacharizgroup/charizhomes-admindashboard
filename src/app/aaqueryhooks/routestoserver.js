import axios from "axios";
import homesServerConfig from "./configServerRoutes/homesServerConfig";
import { getAdminAccessToken } from "./utils/opsUtils";
import UseJwtAuth from "../auth/services/jwt/useJwtAuth";

// const API_BASE_URL = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`
//https://sea-turtle-app-c6p3o.ondigitalocean.app/listing/chariz-my-property

// const API_BASE_URL = `http://localhost:8007`;
const API_BASE_URL = `https://sea-turtle-app-c6p3o.ondigitalocean.app`


/***================================================================================================================= */
export const customHeaders = {
  Accept: "application/json",
};

export const baseUrl = `${API_BASE_URL}`;

export function Api() {
  // const TOKEN = JSON.parse(Cookies.get('authClientUserInfo')).accessToken;

  const Api = axios.create({
    baseURL: baseUrl,
    headers: customHeaders,
  });

  return Api;
}

export function AuthApi() {
  // const TOKEN = JSON.parse(Cookies.get('authClientUserToken')); getAdminAccessToken
  const  token  = getAdminAccessToken();

  console.log("ACCESS__TOKEN", token)
  // const { signOut } = UseJwtAuth();

  const Api = axios.create({
    /*************Previous for Here starts */
    baseURL: baseUrl,
    // headers: customHeaders,
    /*****************Previous for Here starts  ends*/

    headers: { accesstoken: `${token}` },
  });

  Api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        // logOutUser();
        // signOut();
        // window.location.reload()

        return Promise.reject({
          status: 401,
          errors: ["Unauthorized"],
        });
      }

      if (error?.response?.status === 403) {
        let errors = Object.values(error?.response?.data?.errors || {});
        // logOutUser();

        return Promise.reject({
          status: 403,
          errorsRaw: errors,
          errors: errors.reduce((error) => error),
        });
      }

      console.log(
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message
      );

      alert(
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message
      );

      return Promise.reject({
        status: error.response?.status,
        errors: ["Oops!"],
      });
    }
  );

  return Api;
}

export const userSignIn = (formData) =>
  Api().post(`${homesServerConfig.siggnInBravortStudentUrl}`, formData);

export const userForgotPassword = (formData) => {
 
  return Api().post(
    `${homesServerConfig.fogotPassBravortStudentUrl}`,
    formData
  );
};

export const userResetPasswordWithCode = (formData) =>  Api().post(`${homesServerConfig.resetPassBravortStudentUrl}`, formData);
/***
 * Handle USERS: Get All Users on Homes
 */
export const getAllUsers = () =>  {
  return AuthApi().get(`${homesServerConfig.getAllUsers}`)
};


/***========================================================================
 * Handle ADMIN: Get All Admin on Homes
 *====================================================================*/
export const getAllAdminsRoutes = () =>  {
  return AuthApi().get(`${homesServerConfig.getAllAdmins}`)
};

//get single admin
export const getSingleAdminUser = (adminId) =>  {
  return AuthApi().get(`${homesServerConfig.getAllAdmins}/${adminId}`)
};

//Recruit new Admins
export const recruitAdminUserEndpoint = (adminData) =>  {
  // console.log("Recruit DATA", adminData)
  return AuthApi().post(`${homesServerConfig.recruitAdmins}`, adminData)
};

//Recruit new Admins
export const adminUserInviteAcceptanceEndpoint = (adminData) =>  {
  // console.log("Recruit DATA", adminData)
  return Api().post(`${homesServerConfig.acceptInviteByAdmins}`, adminData)
};


/**=================================================================================
 * Get and Handle All AdminUseres ends here
 *=================================================================================*/


/***===========================================================================================
 * Handle Property Listings: Get All Listings by users/property-vendors starts here
 *=============================================================================================*/
export const getAllPropertyListings = () =>  {
  return AuthApi().get(`${homesServerConfig.getAllListings}`)
};


/**Get single listing */
export const getSinglePropertyListing = (listingId) =>  {
  return AuthApi().get(`${homesServerConfig.getAllListings}/${listingId}`)
};

//Approve Listing
export const approvePropertyListing = (listingId) =>  {
  return AuthApi().put(`${homesServerConfig.approveListings}/${listingId}`)
};

/***===========================================================================================
 * Handle Property Listings: Get All Listings by users/property-vendors ends here
 *=============================================================================================*/


/**=================================================================================
 * Get and Handle All Service types starts
 *=================================================================================*/
export const getAllServiceTypes = () =>  {
  return Api().get(`${homesServerConfig.getAllServiceTypes}`)
};

//get single service type
export const getSingleServiceType = (serviceTypeId) =>  {
  return Api().get(`${homesServerConfig.getAllServiceTypes}/${serviceTypeId}`)
};

export const createServiceTypes = (formData) =>  {
  return AuthApi().post(`${homesServerConfig.getAllServiceTypes}/create`, formData)
};

//update sevice typr
export const updateServiceTypesRoute = (formData) =>  {
  return AuthApi().put(`${homesServerConfig.getAllServiceTypes}/${formData?.id}`, formData)
};

//Delete sevice type
export const deleteServiceTypesRoute = (serviceTypeId) =>  {
  return AuthApi().delete(`${homesServerConfig.getAllServiceTypes}/${serviceTypeId}`)
};
/**=================================================================================
 * Get and Handle All Service types ends
 *=================================================================================*/


/**=================================================================================
 * Get and Handle All Property Structure types starts
 *=================================================================================*/
/**Get and Handle All property types */
export const getAllPropertyTypesEndpoint = () =>  {
  return Api().get(`${homesServerConfig.getAllPropertyTypes}`)
};

//get single property type
export const getSinglePropertyTypesEndpoint = (propertyTypeId) =>  {
  return Api().get(`${homesServerConfig.getAllPropertyTypes}/${propertyTypeId}`)
};

export const createPropertyTypesEndpoint = (formData) =>  {
  return AuthApi().post(`${homesServerConfig.getAllPropertyTypes}/create`, formData)
};

//update property type
export const updatePropertyTypesEndpoint = (formData) =>  {
  return AuthApi().put(`${homesServerConfig.getAllPropertyTypes}/${formData?.id}`, formData)
};

//Delete property type
export const deletePropertyTypesEndpoint = (propertyTypeId) =>  {
  return AuthApi().delete(`${homesServerConfig.getAllPropertyTypes}/${propertyTypeId}`)
};

/**=================================================================================
 * Get and Handle All  Property Structure types ends
 *=================================================================================*/



//
export const logOutAdmin = () => {
  // Api().post(`${CONTROL_API_ENDPOINTS.ADMIN_LOGIN}`, formData);
  const ok = true;
  return ok;
};

/***========================================
 * ALL AUTHENTICATED ADMIN REQUESTS GET_ALL_ADMINS
 *=========================================================*/

// export const getAllAdminStaff= () => {

//     return AuthApi().get(`${CONTROL_API_ENDPOINTS.GET_ALL_ADMINS}`)
// }

// export const getAllUsersRegistered= () => {

//     return AuthApi().get(`${CONTROL_API_ENDPOINTS.GET_ALL_USERS}`)
// }

/**
 * =================================================================
 * HANLDE ALL MAIL_SENDING FOR MARKETTING TO STUDENTS
 * =================================================================
 */
// export const sendMailsToStudents= (formData) => {

//     return AuthApi().post(`${CONTROL_API_ENDPOINTS.MAIL_STUDENTS}`, formData)
// }
