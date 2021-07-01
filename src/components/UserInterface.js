import React,{Component} from 'react'
import UserGrid from './UserGrid'
export default class UserInterface extends Component{
    state={
        user:this.props.user
        
    }
    render(){
       return <UserGrid user= {this.state.user}/>;
    }
}

