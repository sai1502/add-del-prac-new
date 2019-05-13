import React, { Component } from 'react';

import List from './List';
import Add from './Add';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            ind: null,
            user: null
        };
    };

    onEdit(ind){
        let user = this.props.users[ind];
        this.setState({
            user: user,
            ind: ind
        });
    };

    onEdited(ind, user) {
        this.props.onEdit(ind, user);
        this.setState({
            ind: null,
            user: null
        });
    };
    render(){
        let ind = this.state.ind;
        let user = this.state.user;
        return(
            <div>
                <Add
                onAdd={this.props.onAdd}
                ind={ind}
                onEdit={this.onEdited.bind(this)}
                user={user} />

                <List
                users={this.props.users}
                onDelete={this.props.onDelete}
                onEdit={this.onEdit.bind(this)} />            

            </div>
        );
    }
}
export default Body;