export const addItem = (content) => ({type: 'ADDITEM', content})
export const updateItem = (content, id) => ({type: 'UPDATEITEM', content, id})
export const removeItem = (id) => ({type: 'REMOVEITEM', id})
export const selectItem = (id) => ({type: 'SELECTITEM', id})