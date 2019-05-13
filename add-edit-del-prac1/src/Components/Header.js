import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div>
                Items Count: {this.props.items.length}
            </div>
        );
    }
}
export default Header;