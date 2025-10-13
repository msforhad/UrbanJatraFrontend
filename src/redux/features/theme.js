import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const initialState = {
  mode:'light',
  menu:'open-menu',
}

const themeSlice = createSlice({
  name:'theme',
  initialState,
  reducers:{
    toggleMode:(state)=>{
      state.mode= state.mode === 'light'?'dark':'light';
      console.log(current(state))
    },
    menuBtn:(state)=>{
      state.menu= state.menu === 'open-menu'?'closed-menu':'open-menu';
      console.log(current(state))
    }

  }

})

export const{toggleMode,menuBtn}=themeSlice.actions
export default themeSlice.reducer