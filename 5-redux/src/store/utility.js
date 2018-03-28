export const updateObject = (state, newObject) => {
  return {
    ...state,
    ...newObject
  }
}