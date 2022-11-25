import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let cart = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        addCount(state, action){
            state[action.payload].count++
        }
    }
})

export let { addCount } = cart.actions

//     {
//         plusOne(state){

//             state.map(el => el.id === state.id) {
//                 return state.count += 1

//                 // map함수 아니면, if 사용?

//                 // return Object.assign({}, state, {
//                 //     cartItems: [...state.cartItems, action.payload]
//                 //   })
//             }
//         },
//         plusCart(state){
//             [...state,]
//             //assign?
//             //action.payload?
//         }
//     } 
//   })
  
  export default configureStore({
    reducer: {
      user : user.reducer,
      cart : cart.reducer
    }
  }) 