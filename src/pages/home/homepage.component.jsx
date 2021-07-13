import React from 'react';
import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component'
import { HomePageContainer, Title } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Title>Bonjour</Title>
    <DropDownMenu />
  </HomePageContainer>
)

export default HomePage;