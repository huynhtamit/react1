import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import data from './data.json';

const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      hienthiForm:true,
      dataUser : [],
      searchText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData')===null)
    {
      localStorage.setItem('userData',JSON.stringify(data));
      var temp=JSON.parse(localStorage.getItem("userData"));
      this.setState({
        dataUser:temp
      })
    }
    else{
      var temp=JSON.parse(localStorage.getItem("userData"));
      this.setState({
        dataUser:temp
      })
    }
  }
  
  doiTrangThai = () =>{
    this.setState({hienthiForm:!this.state.hienthiForm})
    
    
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    })
  }
  getNewUserData = (name,phone,level) => {
    
      var item = {};
      item.id=uuidv1();
      item.name=name;
      item.phone=phone;
      item.level=level;
      var items= this.state.dataUser;
      items.push(item);
      this.setState({dataUser:items})
      localStorage.setItem('userData',JSON.stringify(items));
     
      
  }
  editUser = (user) =>{
    console.log(user);
    this.setState({
     userEditObject:user
    })
    
  }
  getUserInfo = (info) =>{
   
    this.state.dataUser.forEach((value,key)=>{
      if(value.id===info.id){
        value.name= info.name;
        value.phone = info.phone;
        value.level=info.level;
     
      }
      localStorage.setItem('userData',JSON.stringify(this.state.dataUser));
   
  })
    
  }
  deleteUser = (idUser) =>{
    console.log(idUser);
    
    var tempData =this.state.dataUser;
    tempData = tempData.filter(item=>item.id!==idUser)
    this.setState({dataUser:tempData})
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  changeEditUserStatus = () =>{
    this.setState({editUserStatus:!this.state.editUserStatus})
  }

  render() {
  
 
    
      var ketqua= [];
      this.state.dataUser.forEach((item)=>{
          if(item.name.indexOf(this.state.searchText)!==-1){
            ketqua.push(item);
          }
      })
      
      
    return (
      <div>
        <Header/>
        <div className="searchFrom">
          <div className="container">
              <div className="row">
                  <Search getUserInfo={(info)=>this.getUserInfo(info)} userEditObject={this.state.userEditObject} changeEditUserStatus={()=>this.changeEditUserStatus()} editUserStatus={this.state.editUserStatus} ketNoi={()=>this.doiTrangThai()} getTextSearch={(dulieu)=>this.getTextSearch(dulieu)} hienthiForm={this.state.hienthiForm}/>
                  <TableData deleteButton={(idUser)=>this.deleteUser(idUser) }changeEditUserStatus={()=>this.changeEditUserStatus()}  dataUser={ketqua} editUser={(user)=>this.editUser(user)}/>
                  <AddUser hienthiForm={this.state.hienthiForm} getNewUserData={(name,phone,level)=>this.getNewUserData(name,phone,level)}/>
              </div>
             
          </div>
        </div>
      </div>
    );
  }
}

export default App;