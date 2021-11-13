const shoppingListReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                name: action.item,
                completed: false
            };
            return [...state, newItem];
        case 'DELETE_ITEM':
            return [...state.filter((item, index) => index != action.index)];
        default:
            return state;
    }
};

export default shoppingListReducer;