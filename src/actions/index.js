export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item: item
    }
}

export const deleteItem = (index) => {
    return {
        type: 'DELETE_ITEM',
        index: index
    }
}