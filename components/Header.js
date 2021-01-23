import styled from "styled-components";
import { Divider, Title, Subtitle } from './Utils';
import { colors } from './../styles/colors';

export const Header = () => {
  return (
    <HeadWrapper>
      <Title color="white" upperCase={true} fontSize="4rem">Danwakeem</Title>
      <Divider color={colors.primary} />
      <Subtitle marginBottom="3rem">Developer X Creative</Subtitle>
    </HeadWrapper>
  );
};

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('./header.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;
