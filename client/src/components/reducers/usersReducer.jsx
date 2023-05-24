const initialState = {
users: [],
currentUser: null,
loggedIn: false,
user_items: [],
showItem: null, 
items: [],


}

// add all of the state values to the object above.

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
                //   case "ADD_ITEM":
                //     return {
                //         ...state,
                //         user_items: [...state.user_items, action.payload]
                //     }
                case "SHOW_ITEM":
                    return {
                        ...state, 
                        showItem: action.payload
                    }
              case "ADD_ITEM_TO_user_items":
                const item = state.items.find(item => item.id === action.payload.id)
                // check if item is in the user_items already
                const inuser_items = state.userItems.find(item => item.id === action.payload.id ? true : false)
                return {
                    ...state,
                    user_items: inuser_items ? state.user_items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1} :item ) : [...state.user_items, { ...item, qty: 1 }]
                }
            case "ADJUST_QTY":
                return {...state, user_items: state.user_items.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)}
                case "ADD_ITEM":
                return state.find(item =>item.id === action.payload)   
                case "REMOVE_ITEM":
                return state.filter(item => item.id !== action.payload)
                // case "DELETE_ITEM":
                //     const updatedItems = state.items.filter(item => item.id !== action.payload);
                //     return {
                //         ...state,
                //         items: updatedItems
                //       };
        default:
            return state;
    }
}

export default usersReducer;