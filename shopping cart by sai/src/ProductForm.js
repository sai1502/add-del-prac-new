import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {    
        super(props);
        this.state = {
            pName: '',
            pPrice: '',
            editMode: true
        }
    }

    productSubmit(e) {
        e.preventDefault();

        let newpName = this.state.pName;
        let newpPrice = this.state.pPrice;

        if(!this.props.editProducts.row) {
            let newProducts = {
                pName: newpName,
                pPrice: newpPrice
            }
    
            this.props.productSubmit(newProducts);

        } else {
            let editProds = this.props.editProducts;
            editProds.row.pName = newpName;
            editProds.row.pPrice = newpPrice;
            this.props.handleUpdate(editProds);
        }

        this.setState({
            pName: '',
            pPrice: '',
            editMode: true
        })
    }
    
    handleNameChange(e) {
        let productName = e.target.value;
        let productPrice = this.state.pPrice ? this.state.pPrice : this.props.editProducts.row.pPrice;
        
        this.setState({
            pName: productName,
            pPrice: productPrice,
            editMode: false
        })
    }

    handlePriceChange(e) {
        let productName = this.state.pName ? this.state.pName : this.props.editProducts.row.pName;
        let productPrice = e.target.value;

        this.setState({
            pName: productName,
            pPrice: productPrice,
            editMode: false
        })
    }

    render() {
        let pName = this.props.editProducts.row && this.state.editMode ? this.props.editProducts.row.pName : this.state.pName;
        let pPrice = this.props.editProducts.row && this.state.editMode ? this.props.editProducts.row.pPrice : this.state.pPrice;
        
        return(
            <div>

                <h2 className="bg-primary mt-2">Shopping Cart</h2>
            
                <form className="form-control-lg"
                    className={'mx-2'}
                    onSubmit={this.productSubmit.bind(this)}>
                    <input 
                        type={'text'}
                        placeholder={'Enter product name'}
                        className={'pl-2 mr-2'}
                        value={pName}
                        onChange={this.handleNameChange.bind(this)}/>
                    <input 
                        type={'number'}
                        placeholder={'Enter price'}
                        className={'pl-2 mr-2'}
                        value={pPrice}
                        onChange={this.handlePriceChange.bind(this)}/>
                    <button
                        className={'btn btn-sm btn-primary'}>
                        {this.props.editProducts.row ? 'Update list' : 'Add to list'}
                    </button>
                </form>
                <hr/>
            </div>
        )
    }
}

export default ProductForm;