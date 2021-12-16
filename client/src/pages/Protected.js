import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';

const Protected = () => {
  const {authenticated} = useContext(AuthContext)
  
  const renderPage = () => {
    if(authenticated){
      return(
        <p>Secret Nuclear Launch Codes</p>
      )
    } else {
      return (
        <p>No Launch codes for you!</p>
      )
    }
  };
  return (
    <Container>
      <h1>Top Secret!!!</h1>
      {renderPage()}
    </Container>
  )
};

export default Protected;