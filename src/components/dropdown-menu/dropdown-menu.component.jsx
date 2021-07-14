import React from 'react' 
import { DropDownContainer } from './dropdown-menu.styles';

const DropDownMenu = ({name, imageUrl}) => (
  <DropDownContainer style={{backgroundImage: `url(${imageUrl})`}} onClick={() => alert("Clicked !")} />
)

export default DropDownMenu;
