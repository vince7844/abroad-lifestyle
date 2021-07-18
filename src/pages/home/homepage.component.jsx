import React, { Component } from 'react';
import Countries from '../../components/countries/countries.component';
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
              <Countries key={id} {...otherItemProps} />
            )
          }
        </CountriesContainer>
      </HomePageContainer>
    )
  }
}

export default HomePage;