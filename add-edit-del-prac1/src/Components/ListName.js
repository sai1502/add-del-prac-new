import React, { Component } from 'react';

class ListName extends Component{
    onDelete(ind){
        this.props.onDelete(ind);
    };
    onEdit(ind){
        this.props.onEdit(ind);
    };
    render(){
        let  items = this.props.items;
        return(
            <ul>
                {items.map((item,ind)=>
                    <li>
                        {item.firstName}
                        {item.lastName}
                        <button
                        onClick={this.onDelete.bind(this, ind)}
                        type={'button'}>
                            delete
                        </button>
                        <button
                        onClick={this.onEdit.bind(this, ind)}
                        type={'button'}>
                            Edit
                        </button>
                    </li>
                )}
            </ul>
        );
    }
}
export default ListName;