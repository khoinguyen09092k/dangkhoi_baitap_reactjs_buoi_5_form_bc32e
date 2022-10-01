const stateDefault = {
    mangNguoiDung: [
        // {
        //     maSV: 1,
        //     tenSV: 'khôi',
        //     sdt: 1234456,
        //     email: 'abc@gmail.com'
        // }
    ],
    selectedUsers: null,
}
export const formDangKy = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'ADD_USER':{
            const data = [...state.mangNguoiDung]
            const user = {...payload,id: Date.now()}
            data.push(user)
            return {...state, mangNguoiDung: data}
            
        }
        case 'DELETED_USER':{
            const data =state.mangNguoiDung.filter(item=>item.id !== payload)
            return {...state,mangNguoiDung:data}
        }

        case 'EDIT_USER':{
            const user  = state.mangNguoiDung.find(item=>item.id === payload)
            return {...state,selectedUsers:user}
        }
        case 'UPDATE_USER':{
            const newUserList = state.mangNguoiDung.map(item=>{
                if(item.id === payload.id){
                    return payload
                }
                return item
            })
            state.selectedUsers = null
            return {...state,mangNguoiDung:newUserList}
        }
        case 'SREACH_USER':{
            const data =state.mangNguoiDung.filter(item=>item.maSV === payload)
            return {...state,mangNguoiDung:data}
            
        }
        default:
            return state

    }
}