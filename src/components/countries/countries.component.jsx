import React, { Component } from 'react' 
import { CountriesContainer, CountryButton, CountryName } from './countries.styles';
import DropDownMenu from '../dropdown-menu/dropdown-menu.component'

class Countries extends Component {
    constructor(props) {
      super(props)

      this.state = {
        countryClickedOnce: false,
        cities: []
      }
    }

    dropDownEvent = cities => {
      if(!this.state.countryClickedOnce){
        this.setState({
          countryClickedOnce: true,
          cities
        }) 
      } else {
        this.setState({
          countryClickedOnce: false,
          cities: []
        }) 
      }
    }

    render() {
      const { name, imageUrl, cities } = this.props
      return (
        <CountriesContainer> 
          <CountryName>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </CountryName>
          <CountryButton background={imageUrl} onClick={() => this.dropDownEvent(cities)} />
           {
             this.state.countryClickedOnce 
              && this.state.cities.map(city => <DropDownMenu cityName={city.name.toLowerCase()} key={city.id}>{city.name}</DropDownMenu>)
           }
        </CountriesContainer>)
    }
} 


export default Countries;
