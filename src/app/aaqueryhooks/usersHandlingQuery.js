
import { useMutation, useQuery } from 'react-query';
import config from './configServerRoutes/homesServerConfig';
import { getAllUsers, userForgotPassword, userResetPasswordWithCode } from './routestoserver';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
// import { resetForgotPassToken, setUserForgotPassCreedStorage } from './utils/opsUtils';



export default function useGetAllUsers() {
  return useQuery(['__getAllUsers'], getAllUsers)
}


// export function useStudentForgotPass() {
//   const navigate = useNavigate()

//     return useMutation(userForgotPassword, {
//         onSuccess: (data) => {

//             if (data?.data?.success ) {
//                 setUserForgotPassCreedStorage(data?.data?.forgotpass_activation_token)
//                 window.alert(data?.data?.message )
             
//                 navigate('/reset-password');
//                 return;
               
//             } 
//             else if (data?.data?.error){
//                 window.alert(data?.data?.error?.message)
//                 return;
              
//             }else{
//                 window.alert('something unexpected happened')
//                 return;
//             }
//         },
//         onError: (error) => {
//           console.log("ForgotPASS22", error)
//         //   console.log("LoginError2211", JSON.stringify(error?.response) )
//         //   console.log("LoginError2212", error)
//         //   toast.error(error)
//         // const {
//         //     response: { data  },
//         //   }: any = error ?? {};
    
//         //   data?.message?.map((m : []) => toast.error(m))
//         const {
//             response: { data },
//         }= error ?? {}
//         // Array.isArray(data?.message)
//         // ? data?.message?.map((m) => toast.error(m))
//         // : toast.error(data?.message)

//         Array.isArray(data?.message)
//         ? data?.message?.map((m) => window.alert('error-message', m))
//         : window.alert(data?.message)
     
//         },
//     });

//   }

