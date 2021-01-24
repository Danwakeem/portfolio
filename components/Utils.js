import styled from "styled-components";
import { colors } from './../styles/colors';

export const Divider = styled.hr`
  width: 100%;
  max-width: 50px;
  border-top: 1px;
  border-left: 1px;
  border-color: ${props => props.color || 'white'};
  border-width: 3px;
  margin-top: ${props => props.spacing || '30px'};
  margin-bottom: ${props => props.spacing || '30px'};
`;

export const Title = styled.h1`
  ${props => props.upperCase ? 'text-transform: uppercase;' : ''}
  color: ${props => props.color || colors.defaultText};
  ${props => props.fontSize ? `font-size: ${props.fontSize};` : ''}
  font-weight: ${props => props.fontWeight || 700};
  margin: 0;
  line-height: 1;
`;

export const Subtitle = styled.p`
  margin: 0;
  ${props => props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ''}
  font-size: ${props => props.fontSize || '1.15rem'};
  color: ${props => props.color || colors.fadedText};
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${props => props.padding || '4rem'};
  background-color: ${props => props.background || 'white'};
`;