const storage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const initialState = storage;
  
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            localStorage.setItem("cart", JSON.stringify([...state, action.payload]));
            return [...state, action.payload]
        }
        default: return state;
    }
};
  
export default cartReducer;