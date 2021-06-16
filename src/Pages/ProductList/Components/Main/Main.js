import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../../../styles/theme';

const Main = () => {
  return (
    <MainSection>
      <MainContent>
        <Text>부산</Text>
        <Weather>
          <WeatherImg
            src="https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15785511130077.png"
            alt="날씨 이미지입니다."
          />
          <WeatherHeat>16 ℃</WeatherHeat>
          <WeatherIcon
            className="Icon"
            src="https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15766504202262.svg"
            alt="날씨 아이콘 이미지입니다."
          />
        </Weather>
      </MainContent>
    </MainSection>
  );
};

export default Main;

const MainSection = styled.section`
  ${flexSet('center', 'center')}
  width: 100vw;
  height: 280px;
  margin-top: 67px;
  background-image: url('https://cdn.pixabay.com/photo/2020/03/12/14/24/busan-4925217_1280.jpg');
  background-size: cover;
`;

const MainContent = styled.article`
  text-align: center;
`;

const Text = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: bold;
`;

const Weather = styled.div`
  ${flexSet('center', 'center')};
  width: 171px;
  height: 44px;
  margin-top: 9px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

const WeatherImg = styled.img`
  width: 22px;
  height: 22px;
`;

const WeatherHeat = styled.span`
  margin: 4px 20px 0px 20px;
  color: white;
  font-size: 21px;
`;

const WeatherIcon = styled.img`
  width: 14px;
  height: 14px;
`;
