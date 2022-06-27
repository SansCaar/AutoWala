// import * as Google from 'expo-auth-session/providers/google';

// export default async function signInWithGoogleAsync() {
//   try {
//     const result = await Google.logInAsync({
//       androidClientId: '845597949104-avopt2ga5gc2ed43geenb0571880c6ad.apps.googleusercontent.com',
//       scopes: ['profile', 'email'],
//     });

//     if (result.type === 'success') {
//       user=result.user.name;
//       alert(user)
//     } else {   
//       return { cancelled: true };
//     }
//   } catch (e) {
// alert(e);
//   }
// }