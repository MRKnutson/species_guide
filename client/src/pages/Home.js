import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap';
import RenderJson from '../components/RenderJson';
import { NavigationCard } from '../components/Styles';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const auth = useContext(AuthContext)
  return(
    <Container>
      <h1>Home</h1>
      <NavigationCard bg = "dark" text = "white" className = "text-center">
        <Card.Title as = 'h2'>Fish</Card.Title>
      </NavigationCard>
      <NavigationCard bg = "dark" text = "white" className = "text-center">
        <Card.Title as = 'h2'>Invertebrates</Card.Title>
      </NavigationCard>
      <RenderJson json={auth} />
    </Container>
  )
};

export default Home;