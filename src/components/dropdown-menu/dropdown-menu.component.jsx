import React from 'react' 
import { StyledLink } from './dropdown-menu.styles';

const DropDownMenu = ({children, cityName}) => {
  return (
    <StyledLink to={`/city/${cityName}`}>
      {children}
    </StyledLink>
  )
}
  
export default DropDownMenu;