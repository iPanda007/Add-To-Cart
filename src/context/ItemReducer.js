const addToCart = (state,item)=>{
    return  [...state,item]
}
export const reducer = (state,action)=>{
    switch(action.type){
        case "ADD_To_CART": 
          return addToCart(state,action.payload);
        default: return state;
    }
}