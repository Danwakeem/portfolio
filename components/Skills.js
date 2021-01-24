import { Divider, Title, Row } from './Utils';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobile, faCloud, faVideo } from '@fortawesome/free-solid-svg-icons';
import { colors } from './../styles/colors';

export const Skills = () => {
  return (
    <Row>
      <Title color="black">Skills</Title>
      <Divider color={colors.primary} spacing='20px' />
      <SkillList>
        <Skill>
          <SkillIcon icon={faLaptop} size="4x" />
          <SkillTitle>Web</SkillTitle>
          <SkillDescription>I have worked with a wide range of web tools through out my engineering journey. I prefer to work full stack and build things that matter.</SkillDescription>
        </Skill>
        <Skill>
          <SkillIcon icon={faMobile} size="4x" />
          <SkillTitle>Mobile</SkillTitle>
          <SkillDescription>Native, progressive web apps, cordova, oh my! Whatever the project, I always try and pick the right tool for the job.</SkillDescription>
        </Skill>
        <Skill>
          <SkillIcon icon={faCloud} size="4x" />
          <SkillTitle>Cloud</SkillTitle>
          <SkillDescription>I ♥️ the cloud. I have designed and implemented complex systems on many different cloud providers such as AWS, IBM Cloud, and Azure.</SkillDescription>
        </Skill>
        <Skill>
          <SkillIcon icon={faVideo} size="4x" />
          <SkillTitle>Videography</SkillTitle>
          <SkillDescription> know this might seem out of left field but I also happen to be a passionate Photographer / Videographer.</SkillDescription>
        </Skill>
      </SkillList>
    </Row>
  );
};

const SkillDescription = styled.p`
  color: ${colors.darkText};
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

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const SkillList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;