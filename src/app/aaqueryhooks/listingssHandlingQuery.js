
import { useMutation, useQuery, useQueryClient } from 'react-query';
import config from './configServerRoutes/homesServerConfig';
import { approvePropertyListing, getAllPropertyListings, getSinglePropertyListing,  } from './routestoserver';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
// import { resetForgotPassToken, setUserForgotPassCreedStorage } from './utils/opsUtils';



export default function useGetAllListings() {
  return useQuery(['__getAllProperties'], getAllPropertyListings)
}

/***Get Listing By Its ID */
export function useGetSingleListing(params) {
  return useQuery(
      ['__listById', params],
      () => getSinglePropertyListing(params),
      {
          enabled: Boolean(params),
          staleTime: 5000,
      }
  )
}


/***Approve Listing */

export function useApproveAProperty() {
  // const router = useRouter()
  // const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation(approvePropertyListing, {
      onSuccess: (data) => {
        console.log("APPROVE-LISTING-PAYLOAD", data?.data)
          if (data?.data?.approvedListing) {
              // setAuthCredentials(data?.data?.updatedUser)
              // toast.success('liked listing')
              // // router.push(CLIENT_ENDPOINTS.LACHARIZ_LISTINGS)
              // getAuthAdminCredentials()
              window.alert('Listing Approved')
              queryClient.invalidateQueries("__listById")
              queryClient.refetchQueries()
              return
          } else if (data?.data?.error) {
              // toast.error(data?.data?.error?.message)
              console.log("In-BoundError:", data?.data?.error)
              return
          } else {
              // toast.info('something unexpected happened')
              return
          }
      },
      onError: (error) => {
          const {
              response: { data },
          } = error ?? {}
   
          // Array.isArray(data?.message)
          //     ? data?.message?.map((m) => toast.error(m))
          //     : toast.error(data?.message)

          Array.isArray(data?.message)
              ? data?.message?.map((m) => console.log(m))
              : console.log(data?.message)
      },
  })
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

