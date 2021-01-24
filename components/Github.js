import { Button } from 'antd';
import styled from 'styled-components';
import { Title, Row } from './Utils';
import { colors } from '../styles/colors';
import { data } from '../data/data';
const { github } = data;

export const Github = () => {
  return (
    <Row padding='8rem' background={colors.darkBg}>
      <Title fontSize='2rem' fontWeight='300' color="white">{github.header}</Title>
      <a href={github.link} target="_blank" rel="noreferrer">
        <StyledButton aria-label="Github page" type="basic" shape="round" size='large'>
          {github.subSection}
        </StyledButton>
      </a>
    </Row>
  );
};

const StyledButton = styled(Button)`
  margin: 2rem;
`;
