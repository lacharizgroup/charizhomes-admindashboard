
import { useMutation } from 'react-query';
import config from './configServerRoutes/homesServerConfig';
import { userForgotPassword, userResetPasswordWithCode } from './routestoserver';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { resetForgotPassToken, setUserForgotPassCreedStorage } from './utils/opsUtils';
import { toast } from 'react-toastify';




export function useStudentForgotPass() {
  const navigate = useNavigate()

    return useMutation(userForgotPassword, {
        onSuccess: (data) => {
            // console.log("Forgot-Pass__DATA-000", data?.data)

            if (data?.data?.success ) {
                setUserForgotPassCreedStorage(data?.data?.forgotpass_activation_token)
                toast.success(data?.data?.message )
             
                navigate('/reset-password');
                return;
               
            } 
            else if (data?.data?.error){
              toast.error(data?.data?.error?.response && error?.response?.data?.message
                ? error?.response?.data?.message
                : error?.message)
                // window.alert(data?.data?.error?.message)
                return;
              
            }else{
                // toast.info('something unexpected happened')
                toast.info('something unexpected happened')
                return;
            }
        },
        onError: (error) => {
        const {
            response: { data },
        }= error ?? {}
        Array.isArray(data?.message)
        ? data?.message?.map((m) => toast.error(m))
        : toast.error(data?.message)

        // Array.isArray(data?.message)
        // ? data?.message?.map((m) => window.alert('error-message', m))
        // : window.alert(data?.message)
     
        },
    });

  }

  export function useStudentResetPass() {
    const navigate = useNavigate()
  
      return useMutation(userResetPasswordWithCode, {
          onSuccess: (data) => {
  
              if (data?.data?.success ) {
                
                //   console.log("Reset-Pass__DATA--22", data?.data)
                  toast.success(data?.data?.message )
                  resetForgotPassToken()
                  navigate('/sign-in');
                  return;
                 
              } 
              else if (data?.data?.error){
                toast.error(data?.data?.error?.response && error?.response?.data?.message
                  ? error?.response?.data?.message
                  : error?.message)
                  // window.alert(data?.data?.error?.message)
                  return;
                
              }else{
                  // toast.info('something unexpected happened')
                  toast.info('something unexpected happened')
                  return;
              }
          },
          onError: (error) => {
          const {
              response: { data },
          }= error ?? {}
          Array.isArray(data?.message)
          ? data?.message?.map((m) => toast.error(m))
          : toast.error(data?.message)
  
          // Array.isArray(data?.message)
          // ? data?.message?.map((m) => window.alert('error-message', m))
          // : window.alert(data?.message)
       
          },
      });
  
    }