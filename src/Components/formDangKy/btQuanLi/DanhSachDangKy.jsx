import React, { Component } from 'react'
import {connect} from 'react-redux'
class DanhSachDangKy extends Component {
  render() {
    const {mangNguoiDung} = this.props
    return (
      <div className='mx-5'>
        <table className="w-full p-6 text-xs text-left whitespace-nowrap mt-10">
                <thead className="bg-gray-700 p-5 text-white text-lg">
                    <tr className="">
                    <th className="p-3">STT</th>

                        <th className="p-3">Mã Sinh Viên</th>
                        <th className="p-3">Tên Sinh Viên</th>
                        <th className="p-3">Số điện thoại</th>
                        <th className="p-3">Email</th>
                        <th className="p-3"></th>
                    </tr>
                </thead>
                <tbody className='border-b text-lg'> 
                {mangNguoiDung.map((item,index)=>
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.maSV}</td>
                  <td>{item.tenSV}</td>
                  <td>{item.sdt}</td>
                  <td>{item.email}</td>
                  <td>
                  <button className=  'bg-yellow-400 text-white hover:bg-yellow-700 rounded-xl p-3 mr-3 mt-3' 
                  onClick={()=>{
                    this.props.dispatch({
                      type : 'EDIT_USER',
                      payload: item.id
                    })
                  }}
                  >Edit</button>
                  <button className=  'bg-red-500 text-white hover:bg-red-700 rounded-xl p-3 mr-3 mt-3' onClick={()=>{
                    this.props.dispatch({
                      type : 'DELETED_USER',
                      payload: item.id
                    })
                  }}>Delete</button>


                  </td>
                </tr>
                
                   
                )}
               

                </tbody>
                </table>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer)=>{
  return {
    mangNguoiDung : rootReducer.formDangKy.mangNguoiDung
  }
}


export default connect(mapStateToProps)(DanhSachDangKy)