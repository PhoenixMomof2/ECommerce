// import React from 'react'

const itemsReducer = (state=[], action) => {

  switch (action.type) {
  case "LOAD_LISTS":
    return action.payload 
    // case "LOAD_FAKE_ITEMS":
    // return action.payload 
    case "DELETE_ITEM":
      return state.filter(item => item.id !== action.payload)
  default:
  return state;
}
}


export default itemsReducer;