import React, { useEffect } from 'react';
import Head from 'next/head'
import { PageHeader, Button } from 'antd';
import styled from 'styled-components';
import { useScrollYPosition } from 'react-use-scroll-position';

import { Header } from './../components/Header';
import { About } from './../components/About';
import { colors } from '../styles/colors';
import { Skills } from '../components/Skills';

export default function Home() {
  const scrollY = useScrollYPosition();

  return (
    <>
      <Head>
        <title>Danwakeem | Creative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar
        title="Danwakeem"
        ghost={scrollY < 100}
        extra={[
          <NavButtons ghost={scrollY < 100} key="4" type="text">About</NavButtons>,
          <NavButtons ghost={scrollY < 100} key="3" type="text">Skills</NavButtons>,
          <NavButtons ghost={scrollY < 100} key="2" type="text">Portfolio</NavButtons>,
          <NavButtons ghost={scrollY < 100} key="1" type="text">Contact</NavButtons>,
        ]}
      />
      <Header />
      <About />
      <Skills />
    </>
  )
}

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

const NavBar = styled(PageHeader)`
  position: fixed;
  width: 100%;
  padding: 10px 200px;
  ${props => {
    if (props.ghost) {
      return `    
        .ant-page-header-heading-title {
          text-transform: uppercase;
          color: ${colors.fadedText};
        }
      `;
    } else {
      return `
        .ant-page-header-heading-title {
          text-transform: uppercase;
          color: ${colors.primary};
        }
      `;
    }
  }}
`;
