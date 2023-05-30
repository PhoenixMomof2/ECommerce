// import { showItem } from "../actions/items"

const initialState = {
users: [],
currentUser: null,
cartCount: 0,
loggedIn: false,
user_items: [], //user_items is cart
showItem: null, 
items: [],
reviews: []
}

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_USERS":
          return {
            ...state,
            users: action.payload
        }
        case "LOGIN_USER":
          return {
            ...state,
            currentUser: action.payload,
            loggedIn: true
        }
        case "ADD_USER":
          return {
            ...state,
            users: [...state.users, action.payload]
        }
        case "LOGOUT_USER":
          return {
            ...state,
            currentUser: null,
            loggedIn: false
        }
        case "LOAD_ITEMS":
          return {
            ...state,
              items: action.payload
        }    
        case "LOAD_USER_ITEMS":
          return {
            ...state,
              user_items: action.payload
        }    
        case "SHOW_ITEM":
          return {
              ...state, 
              showItem: action.payload
        } 
        case "ADD_TO_CART":
          const item = action.payload;
          const inCart = state.currentUser?.user_items?.find(
          (cartItem) => cartItem.id === item.id)
          const updatedUserItems = inCart
          ? state.currentUser.user_items.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...state.currentUser?.user_items ?? [], { ...item, quantity: 1 }]
          const updatedCartCount = state.cartCount + 1; // Increment the cart count
          return {
            ...state,
            currentUser: {...state.currentUser, user_items: updatedUserItems},
            cartCount: updatedCartCount
        }
        case "UPDATE_CART_COUNT":
          return {
            ...state,
            cartCount: action.payload
        }
        case "ADJUST_QTY":
          return {
            ...state,
            currentUser: {
              ...state.currentUser,
              user_items: state.currentUser.user_items.map((item) =>
                item.id === action.payload.id
                  ? { ...item, quantity: action.payload.quantity }
                  : item
              )
            }
        }            
        case "REMOVE_FROM_CART":
          return {
              ...state,
              user_items: state.user_items.filter(item => item.id !== action.payload.id)
        }
        case "LOAD_REVIEWS":
          return {
            ...state,
            reviews: action.payload
        }
        case "ADD_REVIEW":
          const updatedItem = {...state.showItem, reviews: [...state.reviews, action.payload] }
          return {
            ...state,
            reviews: [...state.reviews, action.payload], 
            showItem: updatedItem
        }                
        default:
          return state;
    }
}
export default usersReducer;