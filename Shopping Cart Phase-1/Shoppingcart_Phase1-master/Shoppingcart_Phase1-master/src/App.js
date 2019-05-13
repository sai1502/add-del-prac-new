import React, { Component } from 'react';
import './App.css';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Cart from './Cart';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: [],
      editProducts: {
        index: '',
        row: ''
      },
      cartProducts: []
    }
  };

  productSubmit(newProducts) {
    let newProds = this.state.products;
    newProds.splice();
    newProds.push(newProducts);

    this.setState({
      products: newProds
    })
  }

  handleDelete(ind) {
    let newProds = this.state.products;
    let deletecart=this.state.cartProducts;
    let index= ind;
    newProds.slice();
    newProds.splice(ind,1);
    deletecart.slice();
    deletecart.splice(index,1);
    

    this.setState({
      products: newProds,
      cartProducts: deletecart
    })
  }

  handleEdit(ind) {
    let newProds = this.state.products;
    let editProds = this.state.editProducts;
    editProds.index = ind;
    editProds.row = newProds[ind];
    
    this.setState({
      editProducts: editProds
    })
    // console.log(this.state.editProducts);
  }

  handleUpdate(editProds) {
    let newProds = this.state.products;
    newProds[editProds.index] = editProds.row;

    this.setState({
      products: newProds,
      editProducts: {
        index: '',
        row: ''
      }
    })
  }

  handleAddToCart(ind) {
    let newProds = this.state.products;
    let cartProds = this.state.cartProducts;
    cartProds.push({
      index : ind,
      row : newProds[ind],
      quantity: 1
    })
    this.setState({
      cartProducts: cartProds
    })

    // console.log(this.state.cartProducts);
  }

  reduceQuantity(ind) {
    let cartProds = this.state.cartProducts;
    cartProds[ind].quantity = cartProds[ind].quantity - 1;
    this.setState({
      cartProducts: cartProds
    })           
  }

  increaseQuantity(ind) {
    let cartProds = this.state.cartProducts;
    cartProds[ind].quantity = cartProds[ind].quantity + 1;
    this.setState({
      cartProducts: cartProds
    })
  }


  render() {
    let products = this.state.products;
    let editProducts = this.state.editProducts;
    let cartProducts = this.state.cartProducts;

    return (
      <div className={'App col-12'}>
        <ProductForm 
          productSubmit={this.productSubmit.bind(this)}
          handleEdit={this.handleEdit.bind(this)}
          editProducts={editProducts}
          handleUpdate={this.handleUpdate.bind(this)}/>

        <ProductList 
          products={products} 
          handleDelete={this.handleDelete.bind(this)}
          handleEdit={this.handleEdit.bind(this)}
          handleAddToCart={this.handleAddToCart.bind(this)} />

        <Cart 
          cartProducts={cartProducts}
          reduceQuantity={this.reduceQuantity.bind(this)}
          increaseQuantity={this.increaseQuantity.bind(this)}/>
      </div>
    );
  }
}

export default App;
