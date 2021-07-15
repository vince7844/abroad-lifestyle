import React from 'react' 
import { DropDownContainer } from './dropdown-menu.styles';
// import img from '../../assets/pictures/flags/france.png'

const DropDownMenu = ({name, imageUrl}) => {
  return (
    <>
    <DropDownContainer style={{backgroundImage: `url('images/flags/${imageUrl}')`}} 
                       onClick={() => alert(`Hey ${name} !`)} />
    </>
  )
}


export default DropDownMenu;
