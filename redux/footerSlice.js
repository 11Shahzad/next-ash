import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    email: []
}
export const footerSlice= createSlice({
 name: 'alertEmail',
 initialState,
 reducers:{
emailalert:(state, action)=>{
    !action.payload ? alert('Please Enter Email') : alert("You'll Start Receiving Promotional Emails @ '"+action.payload+"'")
},
sendemail:(state)=>{
    window.location = "mailto:Work@hotelulyses.com";

},
hotelpeter:(state)=>{
    window.open('https://google.com', '_blank')
},
hoteldean:(state)=>{
    window.open('https://google.com', '_blank')
},
hotelsiren:(state)=>{
    window.open('https://google.com', '_blank')
}

 }

})
export const { emailalert, sendemail, hoteldean, hotelpeter, hotelsiren } = footerSlice.actions
export default footerSlice.reducer