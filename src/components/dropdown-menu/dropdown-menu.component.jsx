import React from 'react' 
import { DropDownContainer } from './dropdown-menu.styles';
// import img from '../../assets/pictures/flags/france.png'

const DropDownMenu = ({name, imageUrl}) => (
    <DropDownContainer background={imageUrl}
                       onClick={() => alert(`Hey ${name} !`)} />
)


export default DropDownMenu;
