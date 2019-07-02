import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            trungGian:'',
            userObj:{}
        }
    }
    
    isChange = (event) => {
        this.setState({trungGian:event.target.value});
        this.props.getTextSearch(event.target.value);
        
        
    }
    hienthiNut = () => {
        if(this.props.hienthiForm === false)
        {
            return (
                <button className="btn  btn-outline-secondary"  onClick={()=>this.props.ketNoi()}>Đóng lại</button>
            )
            
        }
        else
        {
            return (
                <button className="btn  btn-outline-info"   onClick={()=>this.props.ketNoi()} >Thêm mới</button>
            )
        }
    } 
    getInfoUser= (info)=>{
        this.setState({userObj:info})
        this.props.getUserInfo(info);
        
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true)
        {
            return (
                <EditUser getInfoUser={(info)=>this.getInfoUser(info)}  userEditObject={this.props.userEditObject} changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
            )
        }
    }
    render() {
        return (
            <div className="col-sm-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} placeholder="Nhập ten can tim" />
                    <div className="btn btn-info" onClick={(dulieu)=>this.props.getTextSearch(this.state.trungGian)}>Tìm</div>
                </div>   
                <div className="btn-group1">
                    
                  {this.hienthiNut()}

                </div>
                </div>
                <hr/> 
            </div>

        );
    }
}

export default Search;