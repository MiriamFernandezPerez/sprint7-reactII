import styled from "styled-components";

const Boton = styled.button`
  display:inline;
  width: 1.6rem;
  height:1.6rem;
  border-radius: .6rem;
  border:none;
  background-color: #ea6a2a;
  color: #fff;
  font-size: 1.2rem;
  font-weight:bolder;
  line-height: 1rem;
  text-align:center;
  &:hover{
    background-color: #dd4f08;
    color: #fff;
  }
`;
export default Boton;


export const BotonInicio = styled.button`
  border-radius: .6rem;
  border:none;
  background-color: #ea6a2a;
  color: #fff;
  padding:1rem;
  font-size: 1rem;
  font-weight:bolder;
  text-align:center;
  &:hover{
    background-color: #dd4f08;
    color: #fff;
  }
`;

export const BotonInfo = styled.button`
    border:none;
    color: #777;
    font-size: 2rem;
`;