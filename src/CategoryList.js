import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { categoryId: 1, categoryName: "Beverages" },
                { categoryId: 2, categoryName: "Condiments" }
            ],
        };
    }//istersek constructor ve superi siledebiliriz yine calisir.
    
    changeCategory = (category)=>{
        this.setState({currentCategory: category.categoryName})
    };
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {/** Her bir kategory icin uret diyoruz ve bizim iki tane category imiz var onlarin ciktisini alicaz */
                        this.state.categories.map(category => (
                        <ListGroupItem onClick={()=>this.changeCategory(category)} key={category.categoryId}> 
                            {category.categoryName} 
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        )
    }
}  
