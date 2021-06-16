import React, { Component } from 'react';
import Main from './Components/Main/Main';
import Banner from './Components/Banner/Banner';
import CardList from './Components/CardList/CardList';
import Activity from './Components/Activity/Activity';
import Nav from '../../Component/Nav/Nav';
import './ProductList.scss';
import styled from 'styled-components';
import { flexSet } from '../../styles/theme';

class ProductList extends Component {
  render() {
    window.scrollTo(0, 0);

    return (
      <ProductListLayout>
        <Nav />
        <Main />
        <Banner />
        <CardList />
        <Activity />
      </ProductListLayout>
    );
  }
}
export default ProductList;

const ProductListLayout = styled.main`
  ${flexSet('', 'center')};
  flex-direction: column;
`;
