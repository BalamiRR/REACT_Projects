import Navi from './Navi';
import ProductList from './ProductList';
import React, { Component } from 'react';
import CategoryList from './CategoryList';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  state={
    currentCategory:""
  }

  changeCategory = (category)=>{
    this.setState({currentCategory: category.categoryName})
  };
  
  render() {
    let productInfo = { title: "ProductList", baskaBisey: "BaskaBiseylerr" }
    let categoryInfo = { title: "CategoryLisst" }
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory="{this.state.currentCategory}" changeCategory={this.props.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory="{this.state.currentCategory}" info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}