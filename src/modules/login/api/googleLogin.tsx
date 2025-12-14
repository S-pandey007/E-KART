// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure({
//   webClientId:
//     "23958672632-djg43uir5ou1uarn8nemqvf4d38e22ks.apps.googleusercontent.com",
//   offlineAccess: true,
//   forceCodeForRefreshToken: true,
//   scopes: ["profile", "email"],
// });

// export const signInWithGoogle = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();

//     const res = await GoogleSignin.signIn();
//     console.log("Google SignIn Response:", res?.data?.idToken);
//     return res?.idToken || res?.data?.idToken;
//   } catch (err: any) {
//     console.log("Google SignIn Error:", err);

//     if (err.code === statusCodes.SIGN_IN_CANCELLED) {
//       throw new Error("User cancelled the login process");
//     } else if (err.code === statusCodes.IN_PROGRESS) {
//       throw new Error("Sign in is already in progress");
//     } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       throw new Error("Google Play Services not available or outdated");
//     } else if (err.code === statusCodes.SIGN_IN_REQUIRED) {
//       throw new Error("Sign in required, please try again");
//     } else {
//       throw new Error(
//         err?.message || "Something went wrong during Google Sign-In"
//       );
//     }
//   }
// };



// import * as Google from "expo-auth-session/providers/google";
// import * as WebBrowser from "expo-web-browser";
// import * as AuthSession from 'expo-auth-session';
// import { useEffect } from "react";


// WebBrowser.maybeCompleteAuthSession();
// export default function useGoogleLogin() {
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     androidClientId:
//       "23958672632-01k1hopimnp5b2eksr8ert85fiaf5g22.apps.googleusercontent.com",
//     webClientId:
//       "23958672632-djg43uir5ou1uarn8nemqvf4d38e22ks.apps.googleusercontent.com",
//     redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
//     scopes: ["profile", "email"],
//   });

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { authentication } = response;
//       console.log("google ID Token:", authentication?.idToken);

//       fetch("https://www.googleapis.com/userinfo/v2/me", {
//         headers: {
//           Authorization: `Bearer ${authentication?.accessToken}`,
//         },
//       })
//         .then(res => res.json())
//         .then(user => {
//           console.log("USER INFO:", user);
//         });
//     }else if (response?.type === "error") {
//       console.log("GOOGLE LOGIN ERROR:", response.error);
//     }
//   }, [response]);

//   return { promptAsync, request };
// }

import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
  // androidClientId:"23958672632-01k1hopimnp5b2eksr8ert85fiaf5g22.apps.googleusercontent.com",
  webClientId:
    "23958672632-djg43uir5ou1uarn8nemqvf4d38e22ks.apps.googleusercontent.com",
  offlineAccess: true,
  scopes: ["profile", "email"],
});

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    await GoogleSignin.signOut();

    const userInfo = await GoogleSignin.signIn();

    console.log("USER INFO:", userInfo.data);
    return {
      success:true,
      token:userInfo?.data?.idToken || null
    }
    // console.log("ID TOKEN:", userInfo.idToken);
    // console.log("EMAIL:", userInfo.user.email);
    // console.log("NAME:", userInfo.user.name);

  } catch (error) {
    console.log("GOOGLE SIGNIN ERROR:", error);
    
    if (isErrorWithCode(error)) {
      console.log("ERROR CODE:", error.code);
    }
    return {
      success:false,
      token:null,
      error: error
    };
  }
};
