import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RenderJson from '../components/RenderJson';
import { NavigationCard } from '../components/Styles';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const [phylum, setPhylum] = useState();
  const navigate = useNavigate()

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      let response = await axios.get(`/api/phylums`)
      setPhylum(response.data)
    } catch (err) {
      alert("error getting phylum")
    }
  };

  const handleNavigate = (phylum_id, phylum) =>{
    navigate(`/phylums/${phylum_id}`, {state: {phylum}})
  };

  const renderPhylum = () => {
    return phylum.map((p)=>{
      return(
        <NavigationCard bg= "dark" text ="white" className = "text-center" key = {p.id} onClick ={()=> handleNavigate(p.id, p)}>
          <Card.Title as = 'h2'>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</Card.Title>
        </NavigationCard>
      )
    })
  };


  return(
    <Container>
      <h1>Home</h1>
      {phylum && renderPhylum()}
      <RenderJson json={phylum} />
    </Container>
  )
};

export default Home;