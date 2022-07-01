// import * as Google from "expo-auth-session/providers/google";
const signInWithGoogleAsync = async () => {
  const [request, response, promptAsync] = await Google.useAuthRequest({
    androidClientId:
      "845597949104-avopt2ga5gc2ed43geenb0571880c6ad.apps.googleusercontent.com",
  });

  if (response?.type === "success") {
    console.log("the signin was successfull and here is the data ");
    console.log(response.authentication);
    return response.authentication;
  }
  console.log({ response });
};
export default signInWithGoogleAsync;
