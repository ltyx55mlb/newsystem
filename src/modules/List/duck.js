// Action Type

export const initialState = {
  lists: {}
};

export const GET_LISTS = 'GET_LISTS'
export const ON_LISTS = 'ON_LISTS'


// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        lists: action.payload.reduce((acc, list) => ({ ...acc, [list.id]: list }), {})
      }
    default:
      return state;
  }
}

// Action Creators
export const onList = () => {
  return ({
    type: ON_LISTS
  })
}