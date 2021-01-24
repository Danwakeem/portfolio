import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import styled from 'styled-components';
import { Divider, Title, Subtitle, Row } from './Utils';
import { colors } from './../styles/colors';
import { data } from './../data/data';
const { cta } = data;

export const CTA = () => {
  return (
    <Element name="contact">
      <Row padding='8rem 10%'>
        <Title fontWeight="300" fontSize="2rem">{cta.header}</Title>
        <Divider color={colors.primary} spacing='20px' />
        <Subtitle marginBottom='2rem' color={colors.darkText}>{cta.subSection}</Subtitle>
        <a href={`mailto:${cta.email}`}>
          <StyledButton type="primary" shape="round" icon={<Icon icon={cta.icon} />} size='large'>
            {cta.email}
          </StyledButton>
        </a>
      </Row>
    </Element>
  );
};

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 1rem;
  color: white;
  margin-right: 1rem;
`;
