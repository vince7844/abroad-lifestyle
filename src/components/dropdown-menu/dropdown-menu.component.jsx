import React from 'react' 
import { DropDownContainer } from './dropdown-menu.styles';

const DropDownMenu = ({name, imageUrl}) => (
    <DropDownContainer background={imageUrl}
                       onClick={() => alert(`Hey ${name} !`)} />
)


export default DropDownMenu;
