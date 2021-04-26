import styled from 'styled-components'
import {rgba} from 'polished'

const Button = styled.button`
  margin: 10%;
  text-align: center;

  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 20px 40px 0 ${rgba('#ec2f4b', 0.4)};
  }

  &:active {
    outline: none;
    transform: scale(0.95);
  }

  background-image: -webkit-linear-gradient(0deg, #009fff, #ec2f4b);
  box-shadow: 0 20px 40px 0 ${rgba('#009fff', 0.6)};
`

export default Button
