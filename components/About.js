import { Element } from 'react-scroll';
import { Divider, Title, Subtitle, Row } from './Utils';
import { colors } from './../styles/colors';
import { data } from './../data/data';
const { about } = data;

export const About = () => {
  return (
    <Element name="about">
      <Row background={colors.primary}>
        <Title color="white">{about.header}</Title>
        <Divider spacing='20px' />
        <Subtitle>{about.subSection}</Subtitle>
      </Row>
    </Element>
  );
};
