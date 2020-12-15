import useAuthUser from "../hooks/useAuthUser";
import firebase from "firebase/app";

function LogoutButton() {
  const { setAuthUser } = useAuthUser();
  const logout = () => {
    setAuthUser(null);
    firebase.auth().signOut();
  };
  return <button onClick={logout}>ログアウト</button>;
}

export default LogoutButton;
