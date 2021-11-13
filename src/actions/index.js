export const addItem = (item, user) => {
    return {
        type: 'ADD_ITEM',
        item: item,
        user: user
    }
}

export const deleteItem = (index) => {
    return {
        type: 'DELETE_ITEM',
        index: index
    }
}