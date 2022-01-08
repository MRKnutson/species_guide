import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { RaisedCard } from '../components/Styles';

const SpeciesList = () => {
  const [species, setSpecies] = useState()
  const {state} = useLocation()
  const {group} = state

  useEffect(()=>{
    getSpecies()
  },[])

  console.log(group)

  const getSpecies = async () => {
    try {
      let response = await axios.get(`/api/groups/${group.id}/species`)
      setSpecies(response.data)
    } catch (err) {
      alert('error getting species list')
    }
  };

  const renderSpecies = () =>{
    return species.map((s)=>{
      return(
        <RaisedCard className = "text-center" key = {s.id}>
          <Card.Img variant="top" src={window.location.origin + s.image} />
          <Card.Body>
            <Card.Title>{s.common_name}</Card.Title>
            <Card.Subtitle>{s.scientific_name}</Card.Subtitle>
            <Card.Text>{s.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Race Code: {s.rcode}</Card.Footer>
        </RaisedCard>
      )
    }
    )
  };

  return(
    <Container>
      <h1>{group.name.charAt(0).toUpperCase() + group.name.slice(1)}</h1>
      <CardGroup>
        {species && renderSpecies()}
      </CardGroup>
    </Container>
  )
};

export default SpeciesList;