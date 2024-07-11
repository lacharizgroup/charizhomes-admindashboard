
import { useMutation } from 'react-query';
import config from './configServerRoutes/homesServerConfig';
import { userForgotPassword, userResetPasswordWithCode } from './routestoserver';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { resetForgotPassToken, setUserForgotPassCreedStorage } from './utils/opsUtils';




export function useStudentForgotPass() {
  const navigate = useNavigate()

    return useMutation(userForgotPassword, {
        onSuccess: (data) => {
            // console.log("Forgot-Pass__DATA-000", data?.data)

            if (data?.data?.success ) {
                //&& data?.data?.forgotpass_activation_token
                // console.log("Forgot-Pass__DATA--111", data?.data)
                setUserForgotPassCreedStorage(data?.data?.forgotpass_activation_token)
                // setAuthTokens(data?.data?.accessToken)
                // console.log("Forgot-Pass__DATA--22", data?.data)
                window.alert(data?.data?.message )
             
                navigate('/reset-password');
                // <Navigate to='/reset-password' />
                return;
               
            } 
            else if (data?.data?.error){
                // console.log("LoginError22", data)

                // toast.error(data?.data?.error?.message);
                window.alert(data?.data?.error?.message)
                return;
              
            }else{
                // toast.info('something unexpected happened')
                window.alert('something unexpected happened')
                return;
            }
        },
        onError: (error) => {
          console.log("ForgotPASS22", error)
        //   console.log("LoginError2211", JSON.stringify(error?.response) )
        //   console.log("LoginError2212", error)
        //   toast.error(error)
        // const {
        //     response: { data  },
        //   }: any = error ?? {};
    
        //   data?.message?.map((m : []) => toast.error(m))
        const {
            response: { data },
        }= error ?? {}
        // Array.isArray(data?.message)
        // ? data?.message?.map((m) => toast.error(m))
        // : toast.error(data?.message)

        Array.isArray(data?.message)
        ? data?.message?.map((m) => window.alert('error-message', m))
        : window.alert(data?.message)
     
        },
    });

  }

  export function useStudentResetPass() {
    const navigate = useNavigate()
  
      return useMutation(userResetPasswordWithCode, {
          onSuccess: (data) => {
            //   console.log("Forgot-Pass__DATA-000", data?.data)
  
              if (data?.data?.success ) {
                
                //   console.log("Reset-Pass__DATA--22", data?.data)
                  window.alert(data?.data?.message )
                  resetForgotPassToken()
                  navigate('/sign-in');
                  // <Navigate to='/reset-password' />
                  return;
                 
              } 
              else if (data?.data?.error){
                  // console.log("LoginError22", data)
  
                  // toast.error(data?.data?.error?.message);
                  window.alert(data?.data?.error?.message)
                  return;
                
              }else{
                  // toast.info('something unexpected happened')
                  window.alert('something unexpected happened')
                  return;
              }
          },
          onError: (error) => {
            console.log("ForgotPASS22", error)
          //   console.log("LoginError2211", JSON.stringify(error?.response) )
          //   console.log("LoginError2212", error)
          //   toast.error(error)
          // const {
          //     response: { data  },
          //   }: any = error ?? {};
      
          //   data?.message?.map((m : []) => toast.error(m))
          const {
              response: { data },
          }= error ?? {}
          // Array.isArray(data?.message)
          // ? data?.message?.map((m) => toast.error(m))
          // : toast.error(data?.message)
  
          Array.isArray(data?.message)
          ? data?.message?.map((m) => window.alert('error-message', m))
          : window.alert(data?.message)
       
          },
      });
  
    }