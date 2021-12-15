import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState({email: "email@email.com", password:"fdsfdsafds"});

  return(
    <AuthContext.Provider value ={{
      ...user,
      setUser,

    }}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;