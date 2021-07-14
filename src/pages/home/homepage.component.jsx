import React, { Component } from 'react';
import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component'
import { HomePageContainer, Title, CountriesContainer } from './homepage.styles';
import { countries } from '../../data/data'; 

class HomePage extends Component  {
  // constructor() {
  //   this.state = {

  //   }
  // }

  render() {
    return (
      <HomePageContainer>
        <Title>Choose a country</Title>
        <CountriesContainer>
          {
            Object.values(countries).map(({id, ...otherItemProps}) => 
              <DropDownMenu key={id} {...otherItemProps} />
            )
          }
        </CountriesContainer>
      </HomePageContainer>
    )
  }
}

export default HomePage;