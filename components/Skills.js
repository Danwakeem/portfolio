import { Divider, Title, Row } from './Utils';
import { colors } from './../styles/colors';

export const Skills = () => {
  return (
    <Row>
      <Title color="black">Skills</Title>
      <Divider color={colors.primary} spacing='20px' />
    </Row>
  );
};