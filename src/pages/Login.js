import { useEffect } from "react";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import useAuthUser from "../hooks/useAuthUser";
import useChairInfo from "../hooks/useChairInfo";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Login() {
  const { setAuthUser } = useAuthUser();
  const { setChairInfo } = useChairInfo();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) console.log(user.providerData[0]);
      setAuthUser(user.providerData[0]);
    });
  }, [setAuthUser]);
  return (
    <div>
      <h1>VR roomtour Login</h1>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Login;
