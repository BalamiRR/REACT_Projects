import Navi from './Navi';
import ProductList from './ProductList';
import React, { Component } from 'react';
import CategoryList from './CategoryList';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  state = {
    currentCategory: "", 
    products:[],
    cart:[]
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
  
  addtoCart = (product) =>{
    let newCart= this.state.cart;
    var addedItem = newCart.find(c=>c.product.id === product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart});
  }

  render() {
    let productInfo = { title: "ProducList"};
    let categoryInfo = { title: "CategoryLisst" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart}/>
          <Row>
            <Col xs="3">
              <CategoryList 
                changeCategory={this.changeCategory}  /*Burasi bize Categoryi tiklayip, secmemizi saglar*/
                currentCategory={this.state.currentCategory}  /*Burasi bize en son tikladigimizi listede gosterir*/
                info={categoryInfo} /> {/*Bu kisim bize CategoryLisst yazdirir sol tablonun ustunde.*/}
            </Col>
            <Col xs="9">
              <ProductList 
                addtoCart={this.addtoCart}
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