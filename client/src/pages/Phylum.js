import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import RenderJson from '../components/RenderJson';
import { NavigationCard } from '../components/Styles';

const Phylum = ()=>{
  const [groups, setGroups] = useState()
  const {phylum_id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    getGroups()
  },[])

  useEffect(()=>{
    getGroups()
  },[location.pathname])

  const getGroups = async () =>{
    try {
      let response = await axios.get(`/api/phylums/${phylum_id}/groups`)
      setGroups(response.data)
    } catch (err) {
      alert("error getting groups")
    }
  };

  const handleNavigate = (group_id, group) =>{
    navigate(`/groups/${group_id}`)
  };

  const renderGroups = () => {
    return groups.map((group)=>{
      return(
        <NavigationCard bg= "dark" text ="white" className = "text-center" key = {group.id} onClick = {()=>{handleNavigate(group.id, group)}}>
          {/* <Link to = {`/groups/${group.id}`} state = { {from: "test"} } >{group.name.charAt(0).toUpperCase() + group.name.slice(1)}</Link> */}
          <Card.Title as = 'h2'>{group.name.charAt(0).toUpperCase() + group.name.slice(1)}</Card.Title>
        </NavigationCard>
      )
    })
  };

  return(
    <Container>
      <h1>{phylum_id == 1 ? "Fish" : "Invertebrates"}</h1>
      {groups && renderGroups()}
      <RenderJson json = {groups} />
    </Container>
  )
};

export default Phylum;