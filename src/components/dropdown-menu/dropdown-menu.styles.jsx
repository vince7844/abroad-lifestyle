import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }

  &:hover {
    opacity: 0.5;
  }

  &:last-child {
    border-top: solid 1px #ddded9;
    border-bottom-left-radius: 7px; 
    border-bottom-right-radius: 7px; 
  }
`