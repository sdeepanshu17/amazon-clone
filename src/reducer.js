export const initialState = {
    basket: [],
    user: null,
}

// Selector
export const getBasketTool = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const ind = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];
            if (ind>=0){
                newBasket.splice(ind,1);
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
}

export default reducer;