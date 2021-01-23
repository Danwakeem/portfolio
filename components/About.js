import { Divider, Title, Subtitle, Row } from './Utils';
import { colors } from './../styles/colors';

export const About = () => {
  return (
    <Row background={colors.primary}>
      <Title color="white">Yo, my name is Dan</Title>
      <Divider spacing='20px' />
      <Subtitle>I am a very passionate software engineer... and that pretty much sums it up.</Subtitle>
    </Row>
  );
};
