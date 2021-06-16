import React from 'react';
import { useHistory, withRouter } from 'react-router';
import styled from 'styled-components';

const Nav = () => {
  const history = useHistory();
  const goToMain = idx => {
    if (idx === 2) {
      history.push('./login');
    }
  };

  return (
    <Navbar>
      <img
        src="/images/logo.jpg"
        alt="로고이미지"
        onClick={() => history.push('/')}
      />
      <Buttons>
        {buttonData.map((el, idx) => {
          return (
            <Button key={idx} onClick={() => goToMain(idx)}>
              {el}
            </Button>
          );
        })}
      </Buttons>
    </Navbar>
  );
};

export default withRouter(Nav);

const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 68px;
  top: 0px;
  padding: 0 50px;
  border-bottom: 1px solid #eee;
  background: white;
  z-index: 10;

  img {
    width: 152px;
    height: 40px;
    cursor: pointer;
  }
  button {
    border: 0;
    outline: 0;
    background-color: #fff;
    color: #db2f8b;
  }
`;

const Buttons = styled.article``;

const Button = styled.button`
  padding: 10px;
`;

const buttonData = ['한국어', 'KRW 대한민국 원(₩)', '로그인'];
