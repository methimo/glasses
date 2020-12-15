import Router from "./routes/router";
import firebase from "firebase/app";
import Login from "./pages/Login";
import useAuthUser from "./hooks/useAuthUser";

const config = {
  apiKey: "AIzaSyAXQQZzZJvI5akESXIyvXUz2pQjm-fSM5Y",
  authDomain: "vr-roomtour-firebase.firebaseapp.com",
};
firebase.initializeApp(config);

function App() {
  const { authUser } = useAuthUser();
  console.log({ authUser });
  return authUser ? <Router /> : <Login />;
}

export default App;
