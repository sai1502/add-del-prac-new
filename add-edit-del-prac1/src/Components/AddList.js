import React, { Component } from 'react';

class AddList extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            title1:'',
            editMode:true
        };
    };

    onAdd(mode,e){
        e.preventDefault();
        let Fname = this.props.title;
        let Lname = this.props.title1;
        if( mode === 'addMode' ){
            let item = {
                firstName: Fname,
                lastName: Lname
            };
            this.props.onAdd(item);
        }else{
            let editItem = this.props.editItem;
            editItem.item.firstName = Fname;
            editItem.item.lastName = Lname;
            this.props.onUpdate(editItem)
        }
        this.setState({
            title:'',
            title1:'',
            editMode:true
        });
    };
    onChangeTitle(e){
        let fname = e.target.value;
        let lname = this.state.title1 ? this.state.title1 : this.props.editItem.item.lastName
        this.setState({
            title:fname,
            title1:lname,
            editMode:false
        });
    };

    onChangeTitle1(e){
        let Fname = this.state.title ? this.state.title : this.props.editItem.firstName
        let Lname = e.target.value;
        this.setState({
            title:Fname,
            title1:Lname,
            editMode:false
        });
    };
    render(){
        let typeMode = this.props.editItem.item ? 'updateMode' : 'addMode'
        let title = this.props.editItem.item && this.state.editMode ? this.props.editItem.item.firstName : this.state.title
        let title1 = this.props.editItem.item && this.state.editMode ? this.props.editItem.item.lastName : this.state.title1;
        return(
            <form
                onSubmit={this.onAdd.bind(this,typeMode)}>
                First name:
                <input
                onChange={this.onChangeTitle.bind(this)}
                value={title}
                type={'text'}
                placeholder={'first name'}
                />
                Last name:
                <input
                onChange={this.onChangeTitle1.bind(this)}
                value={title1}
                type={'text'}
                placeholder={'last name'}
                />
                <button
                type={'submit'}>
                    {this.props.editItem.item ? "update Name" : "add name"}
                </button>
            </form>
        );
    }
}
export default AddList;