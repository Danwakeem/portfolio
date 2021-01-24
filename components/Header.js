import styled from "styled-components";
import { Divider, Title, Subtitle } from './Utils';
import { colors } from './../styles/colors';
import { data } from './../data/data';
const { header } = data;

export const Header = () => {
  return (
    <HeadWrapper>
      <Title color="white" upperCase={true} fontSize="3.5rem">{header.header}</Title>
      <Divider color={colors.primary} />
      <Subtitle marginBottom="3rem">{header.subSection}</Subtitle>
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
