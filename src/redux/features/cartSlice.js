import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState ={
  products:[],

}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const payloadId = action.payload.id;
      const isExist = state.products.find((product)=>product.id===payloadId);
      if(isExist){
        console.log("items already added")
      }
      else{
        state.products.push({...action.payload,quantity:1})
        console.log(current(state))
      }
      
    }

  }
})
export const {addToCart}=cartSlice.actions
export default cartSlice.reducer