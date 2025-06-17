import { createSlice } from "@reduxjs/toolkit";

const sliceproducts=createSlice({
    name:"sliceproduct",
    initialState:{cart:[]},
    reducers:{
        Addtocard:(state,action)=>{
            const existingitem=state.cart.find(
                (item)=>item.id===action.payload.id
            )
            if(existingitem){
                existingitem.quantity+=action.payload.quantity||1

            }
            else{
                state.cart.push({...action.payload})
            }  
        },
        Removefromcart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload.id)
        },
        IncreaseQty:(state,action)=>{
            const item=state.cart.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity+=1
            }
        },
        DecreaseQty:(state,action)=>{
            const index=state.cart.findIndex((item)=>item.id===action.payload.id)
            if(index!==-1 && state.cart[index].quantity>1){
                state.cart[index].quantity-=1
            }
            else{
                state.cart.splice(index,1)
            }
        }

    }
})
export const{Addtocard,Removefromcart,IncreaseQty,DecreaseQty}=sliceproducts.actions
export default sliceproducts.reducer