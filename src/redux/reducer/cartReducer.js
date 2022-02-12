const INITIAL_STATE = {
    cart: []
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADDITEM":
            // console.log("ADD ITEM");
            const indexItemAdd = state.cart.findIndex(obj => obj.id === action.payload.id);
            // console.log(indexItemAdd);
            if (indexItemAdd !== -1) {
                const updatedQuantity = {
                    ...state.cart[indexItemAdd],
                    quantity: state.cart[indexItemAdd].quantity + action.payload.quantity,
                }
                const newArr = [...state.cart];
                newArr.splice(indexItemAdd, 1, updatedQuantity);
                console.log(newArr);
                return {
                    cart: newArr
                }

            } else {
                const newArr = [...state.cart];
                newArr.push(action.payload);
                console.log(newArr);
                return {
                    cart: newArr
                }
            }
            
        
        case "UPDATEITEM":
            return {

            }    
    }
}