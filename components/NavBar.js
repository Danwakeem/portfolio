import { PageHeader, Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import useWindowSize from './../hooks/useWindowSize';
import { useScrollYPosition } from 'react-use-scroll-position';
import { Link } from 'react-scroll';

import { colors } from '../styles/colors';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const scrollY = useScrollYPosition();
  const windowSize = useWindowSize();
  const { innerWidth } = windowSize;

  const actionButtons = [
    <Link key="4" to="about" smooth={true} duration={500} offset={-80}><NavButtons ghost={scrollY < 100 && innerWidth > 740} type="text">About</NavButtons></Link>,
    <Link key="3" to="skills" smooth={true} duration={500} offset={-80}><NavButtons ghost={scrollY < 100 && innerWidth > 740} type="text">Skills</NavButtons></Link>,
    <Link key="2" to="projects" smooth={true} duration={500} offset={-80}><NavButtons ghost={scrollY < 100 && innerWidth > 740} type="text">Projects</NavButtons></Link>,
    <Link key="1" to="contact" smooth={true} duration={500} offset={-80}><NavButtons ghost={scrollY < 100 && innerWidth > 740} type="text">Contact</NavButtons></Link>,
  ];

  const menu = (
    <Menu>
      { actionButtons.map((button, i) => (
        <Menu.Item key={i}>{button}</Menu.Item>
      ))}
    </Menu>
  );

  const dropdown = [
    <Dropdown key="more" overlay={menu}>
      <Button style={{background: 'none', border: 'none'}}>
        <Icon ghost={scrollY < 100} icon={faChevronCircleDown} />
      </Button>
    </Dropdown>
  ];

  const extra = innerWidth <= 740 ? dropdown : actionButtons;

  return (
    <StyledNav
        title="Danwakeem"
        ghost={scrollY < 100}
        extra={extra}
      />
  );
};

const Icon = styled(FontAwesomeIcon)`
  height: 1.2rem;
  color: black;
  ${props => {
    if (props.ghost) {
      return `
        color: ${colors.fadedText};
      
        &:hover {
          color: rgba(183,183,183,.7);
        }
      `;
    }
  }}
`;

const NavButtons = styled(Button)`
  font-weight: 700;
  text-transform: uppercase;
  ${props => {
    if (props.ghost) {
      return `
        color: ${colors.fadedText};
      
        &:hover {
          color: rgba(183,183,183,.7);
        }
      `;
    }
  }}
`;

const StyledNav = styled(PageHeader)`
  position: fixed;
  width: 100%;
  padding: 10px 12%;
  z-index: 999;
  ${props => {
    if (props.ghost) {
      return `    
        .ant-page-header-heading-title {
          color: ${colors.fadedText};
        }
      `;
    } else {
      return `
        .ant-page-header-heading-title {
          color: ${colors.primary};
        }
      `;
    }
  }}
`;
