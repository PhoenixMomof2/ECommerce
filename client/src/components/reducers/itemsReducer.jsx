// import React from 'react'

const itemsReducer = (state=[], action) => {

  switch (action.type) {
  case "LOAD_ITEMS":
    return action.payload 
  default:
  
  return state;
}
}


export default itemsReducer;