import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { animationDuration } from '../../../../../styles/theme';

const Card = props => {
  const { card, move, idx } = props;
  const { url, available, title, originalPrice, price } = card;
  const [Active, setActive] = useState(false);

  const handleChange = () => {
    setActive(!Active);
  };

  return (
    <CardArticle
      style={{ transform: `translateX(${move}px)` }}
      onClick={() => idx === 0 && props.history.push('/product-detail')}
    >
      <CardImg src={url} alt="카드 이미지입니다." />
      <CardContent>
        <h1>{available}</h1>
        <h2>{title}</h2>
        <h3>{originalPrice}</h3>
        <h4>{price}</h4>
        <LikeBtn
          onClick={handleChange}
          src={Active ? likeYes : likeNo}
          alt="하트 이미지로 된 비활성 아이콘입니다."
        />
      </CardContent>
    </CardArticle>
  );
};

export default withRouter(Card);

const likeYes = `https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15653296786777.svg`;
const likeNo = `https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15653295914590.svg`;

const CardArticle = styled.article`
  width: 280px;
  margin-right: 14px;
  transition: all 300ms ease;
  cursor: pointer;
`;

const CardImg = styled.img`
  height: 172px;
  border-radius: 4px;
`;

const CardContent = styled.div`
  h1,
  h2,
  h4 {
    font-weight: 600;
  }

  h1 {
    font-size: 12px;
    color: #999999;
    margin-bottom: 6px;
  }
  h2 {
    font-size: 14px;
    color: black;
  }
  h3 {
    font-size: 12px;
    color: #999999;
    text-decoration: line-through;
  }
  h4 {
    font-size: 16px;
    color: black;
  }
`;

const LikeBtn = styled.img`
  width: 24px;
  height: 60px;
  position: absolute;
  bottom: 190px;
  right: 10px;
  ${animationDuration}

  &:hover {
    transform: scale(1.15);
  }
`;
