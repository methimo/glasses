import { useEffect } from 'react';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from '../utils/firebase';
import useAuthUser from '../hooks/useAuthUser';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Login() {
  const { setAuthUser } = useAuthUser();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) setAuthUser(user.providerData[0]);
    });
  }, [setAuthUser]);
  return (
    <div>
      <h1>Login</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Login;
