import { useContext } from 'react';
import { AuthUserContext } from '../contexts/UserContext';

function useAuthUser() {
  const { authUser, setAuthUser } = useContext(AuthUserContext);
  return { authUser, setAuthUser };
}

export default useAuthUser;
