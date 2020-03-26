import React from "react";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
import withReveal from "react-reveal/withReveal";
import styled from "styled-components";
import "./PageOne.css";
import makeCarousel from "react-reveal/makeCarousel";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    margin: 10px;
  }
`;

const Titleone = styled.div`
  width: 100%;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
`;

const Titletwo = styled.div`
  width: 100%;
  font-size: 44px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 3px;
`;

const Bar = styled.div`
  width: 70%;
  height: 6px;
  background-color: #f2f2f2;
`;

const Webstudy = styled.div`
  font-size: 88px;
  font-weight: 700;
  color: #ff6e71;
`;

const Zoomstudy = withReveal(
  styled.div`
    font-size: 88px;
    font-weight: 700;
    color: #ff6e71;
  `,
  <Zoom cascade />
);

const Xmark = styled.div`
  width: 100px;
  height: 100px;
  font-size: 100px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Work = styled.div`
  font-size: 120px;
  font-weight: 800;
  text-align: center;
  word-spacing: 7px;
`;

const Pageone = () => {
  return (
    <>
      <Fade duration={3000} delay={0}>
        <Container>
          <Content>
            <Titleone>세종대학교 웹 개발 학술동아리</Titleone>
            <RubberBand duration={5000}>
              <div className="bar" />
            </RubberBand>
            <Zoomstudy>WEB STUDY</Zoomstudy>
            <div className="xmark">×</div>
            <Work>연 중 무 휴</Work>
            <RubberBand duration={5000}>
              <div className="bar" />
            </RubberBand>
            <Titletwo>2020년도 신입부원 모집 중</Titletwo>
          </Content>
        </Container>
      </Fade>
    </>
  );
};

export default Pageone;
