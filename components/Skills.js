import { Element } from 'react-scroll';
import { Row as antRow, Col } from 'antd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Title, Row } from './Utils';
import { colors } from './../styles/colors';
import { data } from './../data/data';
const { skills } = data;

export const Skills = () => {
  return (
    <Element name="skills">
      <Row>
        <Title color="black">{skills.title}</Title>
        <Divider color={colors.primary} spacing='20px' />
        <SkillList>
          {skills.skills.map((skill, i) => (
            <Skill sm={12} md={6} key={i}>
              <SkillIcon icon={skill.icon} size="4x" />
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </Skill>
          ))}
        </SkillList>
      </Row>
    </Element>
  );
};

const SkillDescription = styled.p`
  color: ${colors.darkText};
  text-align: center;
`;

const SkillTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const SkillIcon = styled(FontAwesomeIcon)`
  height: 4rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const Skill = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const SkillList = styled(antRow)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;