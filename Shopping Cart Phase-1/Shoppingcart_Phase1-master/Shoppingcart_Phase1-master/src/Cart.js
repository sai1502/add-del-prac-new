import React, { Component } from 'react';


class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        }
    }

    reduceQuantity(ind) {
        this.props.reduceQuantity(ind);      
    }

    increaseQuantity(ind) {
        this.props.increaseQuantity(ind);
    }

    render() {
        let cartProducts = this.props.cartProducts;
        let total = 0;
        for (let p of cartProducts) {
            total += (p.quantity * p.row.pPrice);
        };

        return (
            <div>
                <h4>Cart</h4>
                <ul className={'col-6'}>
                    <div className={'row font-weight-bold'}>
                        <span className={'col-3'}>Product Name</span>
                        <span className={'col-3'}>Product Price</span>
                        <span className={'col-3'}>Quantity</span>
                        <span className={'col-3'}>Sub Total</span>
                    </div>

                    {cartProducts.map((p,ind) =>
                      
                        <li key={ind} className={'my-1 py-2'}>
                            
                            {p.quantity > 0 ?
                                <div className={'row'}>
                                    <span className={'col-3'}>{p.row.pName}</span>
                                    <span className={'col-3'}>{p.row.pPrice}</span>
                                    <span className={'col-1'}>
                                        <button
                                            onClick={this.reduceQuantity.bind(this, ind)}>
                                                {'-'}
                                        </button>
                                    </span>
                                    <span className={'col-1'}>{p.quantity}</span>
                                    <span className={'col-1'}>
                                        <button
                                            onClick={this.increaseQuantity.bind(this, ind)}>
                                                {'+'}
                                        </button>
                                    </span>
                                    <span className={'col-3'}>{p.row.pPrice * p.quantity}</span>
                                </div>
                                : 
                                    ''
                            }
                            
                        </li>
                            
                    )}
                   TotalRs. ${total}/-
                    
                </ul>
            </div>
        )
    }
};

export default Cart;