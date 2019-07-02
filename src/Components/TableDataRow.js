import React, { Component } from 'react';

class TableDataRow extends Component {
    levelPerson = () => {
        if(this.props.level===1)
        {
            return "Admin"
        }
        else if (this.props.level===2) return "User"
        else return "Modern"
    }
    editClick=() =>{
        this.props.editUser2()
        this.props.changeEditUserStatus()
    }
    
    render() {
     
        return (
            <tr>
                <td >{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.levelPerson()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={()=>this.editClick()}><i className="fa fa-edit" />Sửa</div>
                    <div className="btn btn-danger xoa" onClick={(idUser)=>this.props.deleteButton(this.props.id)}><i className="fa fa-remove" />Xóa</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;