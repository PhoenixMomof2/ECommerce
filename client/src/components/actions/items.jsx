export const loadItems = () => {
  return dispatch => {
    // asynchronous calls
    fetch('/items')
    .then(resp => resp.json())
    .then(data => {
      const action = ({ type: "LOAD_ITEMS", payload: data })
      console.log(data)
      dispatch(action)
    })
  }
}

export const updateCartItems = (item) => {
  return dispatch => {
    // asynchronous calls
    fetch('/cart',
    {
      method: "POST",
      "Accept": "application/json",
      "Content-Type": "application/json",
      body: JSON.stringify(item)
    })
    .then(resp => resp.json())
    .then(data => {
      const action = ({ type: "LOAD_USER_ITEMS", payload: data })
      console.log(data)
      dispatch(action)
    })
  }
}

export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item
  };
};

export const removeFromCart = (id) => {
    return { type: "REMOVE_FROM_CART", payload: id }
}

export const adjustQty = (id, qty) => {
  return { type: "ADJUST_QTY", payload: { id, quantity: qty} }
}

export const updateCart = (total) => {
  return { type: "UPDATE_CART_COUNT", payload: total }
}

export const showItem = (id) => {
  return dispatch => {
    fetch(`/items/${id}`)
      .then(resp => resp.json())
      .then(data => {
        const action = {
          type: "SHOW_ITEM",
          payload: data
        };
        dispatch(action);
        // navigate(`/items/${id}`)
      });
  };
};

// export const removeItem = (item) => {
//   return dispatch => {
//     fetch(`/items/${item.id}`)
//       .then(resp => resp.json())
//       .then(data => {
//         const action = {
//           type: "REMOVE_ITEM",
//           payload: {
//             ...data,
//             quantity: data.quantity - 1 // Increment the quantity by 1
//           }
//         };
//         dispatch(action);
//       });
//   };
// };