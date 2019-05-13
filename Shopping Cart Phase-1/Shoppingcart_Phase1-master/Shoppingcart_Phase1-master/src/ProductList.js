import React, { Component } from 'react';

class ProductList extends Component {
    handleDelete(ind) {
        this.props.handleDelete(ind);
    }

    handleEdit(ind) {
        this.props.handleEdit(ind);
    }

    handleAddToCart(ind) {
        this.props.handleAddToCart(ind);
    }

    render() {
        let products = this.props.products;

        return (
            <div>
                <h4>Product List</h4>
                <ul className={'col-6'}>
                    <div className={'row font-weight-bold'}>
                        <span className={'col-3'}>Product Name</span>
                        <span className={'col-3'}>Product Price</span>
                        <span className={'col-1'}>Edit</span>
                        <span className={'col-2'}>Delete</span>
                        <span className={'col-3'}>Action</span>
                    </div>
                
                    {products.map((product, ind) =>
                        <li key={ind} className={'my-1 py-2'}>
                            <div className={'row'}>
                                <span className={'col-3'}>{product.pName}</span>
                                <span className={'col-3'}>{product.pPrice}</span>
                                <span className={'col-1'}>
                                    <button 
                                        className={'btn btn-sm btn-secondary'}
                                        onClick={this.handleEdit.bind(this, ind)}>
                                        {'Edit'}
                                    </button>
                                </span>
                                <span className={'col-2'}>
                                    <button 
                                        className={'btn btn-sm btn-danger'}
                                        onClick={this.handleDelete.bind(this, ind)}>
                                        {'Delete'}
                                    </button>
                                </span>
                                <span className={'col-3'}>
                                    <button 
                                        className={'btn btn-sm btn-success'}
                                        onClick={this.handleAddToCart.bind(this, ind)}>
                                    
                                        {'Add to cart'}
        
                                    </button>
                                </span>
                            </div>
                        </li>
                       
                    )}
                </ul>
                <hr/>
            </div>
        )
    }
};

export default ProductList;