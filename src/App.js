import Navi from './Navi';
import ProductList from './ProductList';
import React, { Component } from 'react';
import CategoryList from './CategoryList';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  state = {
    currentCategory: "", 
    products:[]
  };

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({currentCategory: category.categoryName});
    this.getProducts(category.id);
  };

  getProducts = (categoryId) =>{
    let url = "http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({products:data}));;
  };

  render() {
    let productInfo = { title: "ProducList"};
    let categoryInfo = { title: "CategoryLisst" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList 
                currentCategory={this.state.currentCategory}  /*Burasi web sitenin sol taraftaki Category kismi*/
                changeCategory={this.changeCategory}  /*Burasi bize Categoryi tiklayip, secmemizi saglar*/
                info={categoryInfo} /> {/*Burasi web sitenin Category kismi*/}
            </Col>
            <Col xs="9">
              <ProductList 
                products={this.state.products}   /*Burasi web sitenin Product kismi*/
                currentCategory={this.state.currentCategory}   /*Burasi web sitenin Category kismi*/
                info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}