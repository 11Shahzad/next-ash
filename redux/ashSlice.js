import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    array: ['asdf']
}

export const ashSlice = createSlice( {
    name: 'availability',
    initialState,
    reducers: {
        addbooking: (state, action) => {
            state.array = [...state.array, action.payload]
        },
        show: (state, action)=>{
            sessionStorage.setItem('open', true)
                      
        }
           
        }
    })
export const {addbooking ,show} = ashSlice.actions

export default ashSlice.reducer