import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventory: [
        // { id: 1, code: "A1",name:"chair",stock:5,price:10000, age: 12 },
        // { id: 2, code: "B1",name:"table",stock:2,price:20000, age: 12 },
    ],
  },
  reducers: {
    setInventory: (state,action)=>{
      state.inventory = action.payload.data
    }
  },
});

export const { setInventory,
             } = inventorySlice.actions;

export default inventorySlice.reducer;
export const getInventory = ()=>{
    return async dispatch =>{
      try{
          const res = await axios.get("/inventory/get")
          // console.log(res.data.data)
        await dispatch(setInventory(res.data))
        return res.data
    }catch(err){
  
    }
    }
  }

export const createInventory = (data)=>{
  return async dispatch =>{
    try{
        const res = await axios.post("/inventory/create",{
            product_id: data.id,
            product_name: data.name,
            product_category: data.category,
            product_price: data.price,
            product_cost: data.cost,
            product_description: data.description
        })

     if(res.status== 201){
        return "INVENTORY_ADDED"
     }
     return "INVENTORY_FAILED"
  }catch(err){

  }
  }
}