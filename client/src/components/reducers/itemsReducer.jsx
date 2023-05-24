// const initialState = {
//   items: [],
//   user_items: [],
// item: null,
// }

// const itemsReducer = (state=initialState, action) => {

//   switch (action.type) {
//   case "LOAD_ITEMS":
//     return {
//       ...state,
//        items: action.payload
//     }
// case "LOAD_ITEM":
    //     return {
    //       ...state,
    //        item: action.payload
    //     }
// case "ADD_TO_CART":
//     const item = state.items.find(item => item.id === action.payload.id)
//     // check if item is in the user_items already
//     const inuser_items = state.user_items.find(item => item.id === action.payload.id ? true : false)
//   return {
//     ...state,
//     user_items: inuser_items ? state.user_items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1} :item ) : [...state.user_items, { ...item, qty: 1 }]
//   }
// case "ADJUST_QTY":
// return {...state, user_items: state.user_items.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)}
// return {}
//     case "REMOVE_FROM_CART:
//       return { ...state, state.user_items.filter((item) => item.id !== action.payload.id)
//   default:
//   return state;
// }
// }


// export default itemsReducer;

//export const addTouser_items = (id) => {
//     return {
//     type: "ADD_TO_user_items", payload: id
// }
// }

// export const removeFromuser_items = (id) => {
//     return { type: "REMOVE_FROM_user_items", payload: id }
// }

// export const adjustQty = (item, value) => {
//     type: ADJUST_QTY, payload: {id, qty: value}
// }