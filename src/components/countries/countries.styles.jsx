import styled from 'styled-components';

export const CountriesContainer = styled.div`
  display: block;
  margin: 10px;
`

export const CountryName = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`

export const CountryButton = styled.div`
  display: flex;
  width: 150px;
  height: 90px;
  cursor: pointer;
  background-image: url('images/flags/${props => props.background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  &:hover {
    opacity: 0.3;
  }
`