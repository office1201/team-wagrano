import React, { useEffect, useState } from 'react';
import Card from '../CardList/Card/Card';

const CardList = () => {
  const [cardList, setCardList] = useState([]);
  const [move, setMove] = useState(0);
  const [move1, setMove1] = useState(0);
  const [move2, setMove2] = useState(0);

  useEffect(() => {
    const urls = [
      'http://localhost:3000/data/productListData1.json',
      'http://localhost:3000/data/productListData2.json',
      'http://localhost:3000/data/productListData3.json',
    ];
    const requests = urls.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(response => {
        setCardList(response);
      });
  }, []);

  const goLeft = num => {
    if (num === 1) setMove(move + 100);
    if (num === 2) setMove1(move1 + 100);
    if (num === 3) setMove2(move2 + 100);
  };

  const goRight = num => {
    if (num === 1) setMove(move - 100);
    if (num === 2) setMove1(move1 - 100);
    if (num === 3) setMove2(move2 - 100);
  };
  console.log(cardList[0]);
  return (
    <>
      <section className="cardLists">
        <article className="cardList">
          <header>레스토랑도 할인 받으세요.</header>
          <div className="cardListBox">
            {cardList[0] &&
              cardList[0].map((card, idx) => (
                <Card key={card.id} card={card} move={move} idx={idx} />
              ))}
          </div>
        </article>
        <div className={`swiperleftBtn ${move === 0 ? 'hidden' : ''}`}>
          <span onClick={() => goLeft(1)}>🌸</span>
        </div>
        <div className={`swiperRightBtn ${move < -1600 ? 'hidden' : ''}`}>
          <span onClick={() => goRight(1)}>🌸</span>
        </div>
      </section>
      <section className="cardLists">
        <article className="cardList">
          <header>여기는 꼭 가보세요.</header>
          <div className="cardListBox">
            {cardList[1] &&
              cardList[1].map(card => (
                <Card key={card.id} card={card} move={move1} />
              ))}
          </div>
        </article>
        <div className={`swiperleftBtn ${move1 === 0 ? 'hidden' : ''}`}>
          <span onClick={() => goLeft(2)}>🌸</span>
        </div>
        <div className={`swiperRightBtn ${move1 < -500 ? 'hidden' : ''}`}>
          <span onClick={() => goRight(2)}>🌸</span>
        </div>
      </section>
      <section className="cardLists">
        <article className="cardList">
          <header>부산 인기 숙소</header>
          <div className="cardListBox">
            {cardList[2] &&
              cardList[2].map(card => (
                <Card key={card.id} card={card} move={move2} />
              ))}
          </div>
        </article>
        <div className={`swiperleftBtn ${move2 === 0 ? 'hidden' : ''}`}>
          <span onClick={() => goLeft(3)}>🌸</span>
        </div>
        <div className={`swiperRightBtn ${move2 < -2100 ? 'hidden' : ''}`}>
          <span onClick={() => goRight(3)}>🌸</span>
        </div>
      </section>
    </>
  );
};

export default CardList;
