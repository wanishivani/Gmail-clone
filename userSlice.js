import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice({
name:'user',
initialState:{

    isMsgopen:false
},


reducers:{

openMsg:(state)=>{
  state.isMsgopen=true
},

closeMsg:(state)=>{
    state.isMsgopen=false

},



},
});
export const {openMsg,closeMsg} = userSlice.actions;
export const selectisMsgopen =(state)=>state.user.isMsgopen;
export default userSlice.reducer;











