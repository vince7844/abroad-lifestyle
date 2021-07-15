import styled from 'styled-components';

export const DropDownContainer = styled.div`
  display: flex;
  width: 150px;
  height: 90px;
  cursor: pointer;
  background-image: url('images/flags/${props => props.background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin: 10px;

  &:hover {
    opacity: 0.3;
  }
`