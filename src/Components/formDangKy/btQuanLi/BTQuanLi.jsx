import React, { Component } from 'react'
import DanhSachDangKy from './DanhSachDangKy'
import FromDangKy from './FromDangKy'

export default class BTQuanLi extends Component {
  render() {
    return (
      <div>

        <FromDangKy/>
        <DanhSachDangKy/>
      </div>
    )
  }
}
