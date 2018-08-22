import * as ActionTypes from '../actions/index'
import { Map, List, fromJS } from '../public/libs/immutable'

export default (state = fromJS({
  fetching: false,
  error: false,
  data: fromJS([])
}), action) => {

  if (action.type === ActionTypes.CREATE_ORDERS_SUCCESS) {

    return state.merge({
      fetching: false,
      error: false,
      data: fromJS(action.response)
    })
  } else if (action.type === ActionTypes.CREATE_ORDERS_REQUEST) {
    return state.merge({
      fetching: true,
      error: false
    })
  } else if (action.type === ActionTypes.CREATE_ORDERS_FAILURE){
    return state.merge({
      fetching: false,
      error: true
    })
  }

  return state
}