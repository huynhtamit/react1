import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
   
    mappingDataUser= () => (
       this.props.dataUser.map((value,key)=>(
          <TableDataRow deleteButton={(idUser)=>this.props.deleteButton(idUser)} changeEditUserStatus={()=>this.props.changeEditUserStatus()}  editUser2={(user)=>this.props.editUser(value)} id={value.id} key={key} name={value.name} phone={value.phone} level={value.level}/>
        ))
    )
    render() {
        return (
            <div className="col">
  <table className="table table-striped table-inverse table-hover">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
     {this.mappingDataUser()}
     
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;