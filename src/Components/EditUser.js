import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id :this.props.userEditObject.id,
      name:this.props.userEditObject.name,
      phone:this.props.userEditObject.phone,
      level:this.props.userEditObject.level
    }
  }
  
  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]:value});
    
  }
  saveButton = () =>{
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.phone = this.state.phone;
    info.level = this.state.level;
    this.props.getInfoUser(info);
    this.props.changeEditUserStatus()
  }
    render() {
        return (
            <div className="col-12">
            <div className="card text-white bg-warning border-primary mb-3 mt-2">
            <div className="card-header text-center">Sửa thông tin user</div>
            <div className="card-body text-primary">
              <form action="" method="post" >
              <div className="form-group">
                <label>Tên</label>
                <input type="text" name="name" onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} className="form-control"  placeholder="Nhập tên" />
              </div>
              <div className="form-group">
                <label>Điện thoại</label>
                <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} name="phone"  defaultValue={this.props.userEditObject.phone} placeholder="Nhập số điện thoại" />
              </div>
              <div className="form-group">
                <label >Quyền</label>
                <select className="form-control" name="level" onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.level} >
                   <option >Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>User</option>
                  <option value={3}>Modern</option>
                </select>
              </div>
              <div className="form-group">
                <input type="button" value="Sửa" onClick={()=>this.saveButton()} className="btn btn-block btn-danger"/>
              </div>
              </form>
            </div>
            
          </div>
          </div>
        );
    }
}

export default EditUser;