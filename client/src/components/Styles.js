import { Card } from "react-bootstrap";
import styled from "styled-components";

export const NavigationCard = styled(Card)`
  padding: 15px;
  margin: 30px 10px 30px 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  &:hover {
    padding: 18px;
    cursor: pointer;
  }
`