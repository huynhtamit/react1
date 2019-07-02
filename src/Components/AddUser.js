import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id:"",
        name:"",
        phone:"",
        level:""
      }
    }
    
    isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      
      this.setState({
        [name]:value
      })
     
      
    }
    kiemtraTT = () => {
      if(this.props.hienthiForm===true)
      {
        return (
          <div className="col">
          <div className="card border-primary mb-3 mt-2">
          <div className="card-header">Thêm mới User vào hệ thống</div>
          <div className="card-body text-primary">
            <form action="" >
            <div className="form-group">
              <label>Tên</label>
              <input type="text" name="name" className="form-control" onChange={(event)=>this.isChange(event)} placeholder="Nhập tên" />
            </div>
            <div className="form-group">
              <label>Điện thoại</label>
              <input type="text" className="form-control" name="phone" onChange={(event)=>this.isChange(event)} placeholder="Nhập số điện thoại" />
            </div>
            <div className="form-group">
              <label >Quyền</label>
              <select className="form-control" name="level" onChange={(event)=>this.isChange(event)}>
                <option value={1}>Chọn quyền mặc định</option>
                <option value={2}>Admin</option>
                <option value={3}>User</option>
              </select>
            </div>
            <div className="form-group">
              <input type="reset" value="Thêm mới" className="btn btn-block btn-primary" onClick={(item)=>this.props.getNewUserData(this.state.name,this.state.phone,this.state.level)}/>
            </div>
            </form>
          </div>
          
        </div>
        </div>
        )
       
      }
    }
    
    render() {
        // var item={};
        // item.id= this.state.id;
        // item.name=this.state.name;
        // item.phone=this.state.phone;
        // item.level=this.state.level;
        // console.log(item);
        return (
          
            <div>
           
              {this.kiemtraTT()}

            </div>
         
          
          
        );
    }
}

export default AddUser;