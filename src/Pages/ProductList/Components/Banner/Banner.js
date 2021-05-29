import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => changeBanner(), 3000);
  });

  const changeBanner = () => {
    if (index < 5) setIndex(index + 1);
    if (index === 5) setIndex(0);
  };

  return (
    <BannerSection>
      <BannerContent>
        <BannerImg src={bannerData[index]} alt="광고 배너 이미지입니다." />
      </BannerContent>
    </BannerSection>
  );
};
export default Banner;

const BannerSection = styled.section`
  width: 1300px;
  height: 146px;
`;

const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const BannerImg = styled.img``;

const bannerData = [
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2020/04/27/15879807176618.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/04/19/16188201485468.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/04/29/16196775741784.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/04/28/16195934194618.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/02/26/16143034313922.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/03/02/16146723605470.png`,
];
