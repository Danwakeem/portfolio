import { Element } from 'react-scroll';
import { Row, Col, Modal, Card } from 'antd';
import styled from 'styled-components';
import { colors } from './../styles/colors';
import { data } from './../data/data';
import { useState } from 'react';
const { portfolio } = data;
const { Meta } = Card;

export const Projects = () => {
  const [modalData, setModalData] = useState();
  const [showModal, setShowModal] = useState();

  const presentModal = (project) => {
    setModalData(project);
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <Element name="projects">
      <Row>
        {
          portfolio.projects.map((project, i) => (
            <Col md={12} lg={8} key={i} onClick={() => presentModal(project)}>
              <Box>
                <StyledImg
                  alt={project.name}
                  src={project.fullImage}
                />
                <BoxCaption>
                  <CaptionContent>
                    <Category>{project.category}</Category>
                    <CaptionTitle>{project.name}</CaptionTitle>
                  </CaptionContent>
                </BoxCaption>
              </Box>
            </Col>
          ))
        }
        <Modal
          visible={showModal}
          onCancel={hideModal}
          centered>
          <Card
            cover={<img alt={modalData?.name} src={modalData?.fullImage} />}
          >
            <Meta title={modalData?.name} description={<p dangerouslySetInnerHTML={{ __html: modalData?.description }} ></p>} />
          </Card>
        </Modal>
      </Row>
    </Element>
  )
};

const Box = styled.div`
  position: relative;
  display: block;
  max-width: 650px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const BoxCaption = styled.div`
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 0;
  color: #fff;
  background: rgba(63, 81, 181, 0.9);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
`;

const CaptionContent = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
`;

const Category = styled.div`
  font-size: 14px;
  padding: 0 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.fadedText};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const CaptionTitle = styled(Category)`
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;
