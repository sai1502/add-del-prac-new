import React, { Component } from 'react';

import AddList from './AddList';
import ListName from './ListName';

class Body extends Component{
    render(){
        return(
            <div>
                <AddList
                    onAdd={this.props.onAdd}
                    onEdit={this.props.onEdit}
                    onUpdate={this.props.onUpdate}
                    editItem={this.props.editItem}
                 />
                 <ListName
                    items={this.props.items}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                  />
            </div>
        );
    }
}
export default Body;