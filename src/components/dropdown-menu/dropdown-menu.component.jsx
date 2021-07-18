import React from 'react' 
import { DropDownMenuContainer } from './dropdown-menu.styles';

const DropDownMenu = ({children}) => (
  <DropDownMenuContainer>
    {children}
  </DropDownMenuContainer>
)



export default DropDownMenu;