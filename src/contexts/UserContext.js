import { createContext, useState } from 'react';

export const AuthUserContext = createContext(null);

function AuthUserProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }} {...props} />
  );
}

export default AuthUserProvider;
