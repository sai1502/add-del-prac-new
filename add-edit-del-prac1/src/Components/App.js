import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      editItem:{index:'',item:''}
    };
  };
  onAdd(item){
    let newItems = this.state.items;
    newItems.splice();
    newItems.push(item);
    this.setState({
      items: newItems
    });
  };
  onDelete(ind){
    let newItems = this.state.items;
    newItems.splice(ind,1);
    this.setState({
      items: newItems
    });
  };
  onEdit(ind){
    let newItems = this.state.items;
    let editItem = this.state.editItem;
    editItem.index = ind;
    editItem.item = newItems[ind]
    this.setState({
      editItem: editItem
    });
  };
  onUpdate(editedItem){
    let newItems = this.state.items;
    newItems[editedItem.index] = editedItem.item;
    this.setState({
      items: newItems,
      editedItem:{index:'',item:''}
    });
  };
  render(){
    let items = this.state.items;
    return(
      <div>
        <Header items={items} />
        <Body items={items} onDelete={this.onDelete.bind(this)} onAdd={this.onAdd.bind(this)}
        onUpdate={this.onUpdate.bind(this)} onEdit={this.onEdit.bind(this)} editItem={this.state.editItem} />
      </div>
    );
  }
}
export default App;