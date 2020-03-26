import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 760px;
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

const Imgbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  * {
    margin: 10px 30px;
  }
`;

const Img = styled.img`
  width: 100px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin: 50px 0;
`;

const Explain = styled.div`
  width: 100% !important;
  height: 100% !important;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  opacity: 0.7;
  padding: 30px;
  line-height: 30px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

const Pagetwo = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1
  };

  return (
    <Container>
      <Fade duration={4000}>
        <Content>
          <Imgbox>
            <Flip bottom cascade duration={2000}>
              <Img src="https://image.flaticon.com/icons/svg/2728/2728997.svg" />
            </Flip>
            <Flip bottom cascade duration={2000} delay={200}>
              <Img src="https://image.flaticon.com/icons/svg/2729/2729007.svg" />
            </Flip>
            <Flip bottom cascade duration={2000} delay={400}>
              <Img src="https://image.flaticon.com/icons/svg/2729/2729032.svg" />
            </Flip>
          </Imgbox>
          <Title>오픈이어라운드</Title>
          <div>
            <Slider {...settings}>
              <Explain>
                는 연중무휴라는 뜻으로
                <br />
                2013년 12월 만들어진 웹 개발 학술동아리 입니다. <br />
                스터디를 통해 웹서비스 개발에 중점을 두고 있고,
                <br />팀 프로젝트를 진행하면서 각종 공모전 및 학술제에 참여하고
                있습니다.
              </Explain>
              <Explain>
                는 1학기 중에는 시험기간 2주를 제외하고
                <br />
                매주 월요일 저녁에 스터디를 진행합니다.
                <br />
                프로젝트는 스터디가 끝난 후 여름방학부터 진행합니다.
                <br />
                2학기와 겨울방학 때는 희망하는 동아리원만
                <br />더 심화된 내용으로 스터디와 프로젝트를 진행합니다.
              </Explain>
              <Explain>
                에서는 동아리를 거처간 선배님에게 조언을 구할 수 있는
                <br />
                행사를 진행하고 있습니다.
                <br />
                선배님들과 함께 하는 홈커밍 데이에서는
                <br />
                실무에 필요한 정보를 얻고 넓은 인맥을 만들 수 있습니다.
                <br />그 외에도 MT나 다양한 IT 행사를 소개해주고
                <br />
                진행할 계획입니다.
              </Explain>
            </Slider>
          </div>
        </Content>
      </Fade>
    </Container>
  );
};

export default Pagetwo;
