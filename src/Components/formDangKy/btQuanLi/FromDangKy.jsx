import React, { Component } from 'react'
import { connect } from 'react-redux'

class FromDangKy extends Component {
  state = {
    values: {
      maSV: '',
      tenSV: '',
      sdt: '',
      email: '',
    },
    error: {}
  }

  handleState = (event) => {
    const { name, value } = event.target
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(!event.target.checkValidity()){
      return
    }
    // console.log(event.target.checkValidity());
    this.props.dispatch({
      type: this.props.selectedUsers ? 'UPDATE_USER': 'ADD_USER',
      payload: this.state.values
    })
  }

  handleBlur = (event) => {
    const {
      name,
      title,
      minLength,
      maxLength,
      validationMessage,

      validity: { valueMissing, tooShort, patternMismatch } } = event.target
    console.log("validationMessage,validity: ", validationMessage);

    let mess = ""
    if (valueMissing) {
      mess = `${title} không được bỏ trống !`
    }
    if (tooShort) {
      mess = `${title} phải từ ${minLength} đến ${maxLength} kí tự !`

    }
    if (patternMismatch) {
      mess = `${title} không đúng định dạng !`
    }
    this.setState({
      error: {
        ...this.state.error,
        [name]: mess
      }
    })
 
  }

  static getDerivedStateFromProps = (nextProps,currentState)=>{
    console.log( nextProps,currentState);

        if(nextProps.selectedUsers && nextProps.selectedUsers.id !== currentState.values.id){
            currentState.values = nextProps.selectedUsers
        }

        return currentState
}
  render() {
    const {selectedUsers} = this.props
    const {maSV,tenSV,sdt,email} =this.state.values || {}
   
    return (
      <div >
        <form
          id='form'
          action=""
          noValidate
          className='mx-5'
          onSubmit={this.handleSubmit}

        >
          <h1 className='text-white bg-black text-center p-5 text-3xl' >Thông Tin Sinh Viên</h1>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div>
              <p className='text-xl'>Mã Sinh Viên</p>
              <input
                required
                minLength={4}
                maxLength={12}
                type="text"
                name='maSV'
                title='Mã Sinh Viên'
                value={maSV}
                onChange={this.handleState}
                onBlur={this.handleBlur}

                className='border-2 border-black rounded-lg w-100 p-2' />
              <br />
              <span className='text-red-500 '>{this.state.error.maSV}</span>
            </div>
            <div>
              <p className='text-xl'>Tên Sinh Viên</p>
              <input
                required
                type="text"
                name='tenSV'
                title='Tên Sinh Viên'
                minLength={4}
                maxLength={12}
                value={tenSV}

                onChange={this.handleState}
                onBlur={this.handleBlur}

                className='border-2 border-black rounded-lg w-100 p-2' />
              <br />
              <span className='text-red-500 '>{this.state.error.tenSV}</span>

            </div>
            <div>
              <p className='text-xl'>Số Điện Thoại</p>
              <input
                required
                type="text"
                name='sdt'
                title='Số Điện Thoại'
                minLength={4}
                maxLength={12}
                value={sdt}

                onChange={this.handleState}
                onBlur={this.handleBlur}

                className='border-2 border-black rounded-lg w-100 p-2' />
              <br />
              <span className='text-red-500 '>{this.state.error.sdt}</span>

            </div>
            <div>
              <p className='text-xl'>Email</p>
              <input
                required
                type="text"
                name='email'
                title='Email'
                
                pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                onChange={this.handleState}
                onBlur={this.handleBlur}
                value={email}

                className='border-2 border-black rounded-lg w-100 p-2' />
              <br />
              <span className='text-red-500 '>{this.state.error.email}</span>

            </div>

          </div>
          <button type='submit' className={`mr-3 mt-3 p-4 bg-blue-400 text-white rounded-lg  cursor-pointer hover:bg-blue-700 
                ${!this.props.selectedUsers?"":'hidden'}`}>Đăng Ký</button>
                <button type='submit'className={ `mr-3 p-4 mt-3 bg-red-400 text-white rounded-lg  cursor-pointer hover:bg-red-700 
                ${this.props.selectedUsers??'hidden'}`} // ?? bắt giá trị null
               
                >Cập Nhật</button>

        </form>

      </div>
    )
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    ...rootReducer.formDangKy,
  }
}
export default connect(mapStateToProps)(FromDangKy)