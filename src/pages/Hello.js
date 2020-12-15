import { Link } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import LogoutButton from "../components/LogoutButton";

function Hello() {
  const { authUser } = useAuthUser();
  return (
    <div>
      <h3>Hello!! {authUser.displayName}さん </h3>
      <div>
        <img src={authUser.photoURL} alt="icon" width="60" height="60" />
      </div>
      <p>
        <Link to="/hello">hello</Link>
      </p>
      <LogoutButton />
    </div>
  );
}

export default Hello;
