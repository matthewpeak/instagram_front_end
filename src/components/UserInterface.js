import React,{Component} from 'react'
import UserGrid from './UserGrid'
export default class UserInterface extends Component{
    state={
        user:this.props.user

    }
    render(){
       return <UserGrid pictures={[{picture:'https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/best-practices-stock-photos.jpg?eYCSfqp14RaVbejUbqjDKl0gnXTXgUKm&itok=PNAopYJB',liked:'yes',likes:1000},
       {picture:'https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg',liked:'yes',likes:500},
       {picture:'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg',liked:'no',likes:700},
       {picture:'https://image.shutterstock.com/image-photo/dabbing-trends-overjoyed-woman-showing-260nw-1714457554.jpg',liked:'no',likes:33},
       {picture:'https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',liked:'yes',likes:55} ,
       {picture:'https://static.independent.co.uk/2020/09/18/11/stock%20model%201.jpg?width=982&height=726&auto=webp&quality=75',liked:'yes',likes:55}]} user= {this.state.user}/>;
    }
}




