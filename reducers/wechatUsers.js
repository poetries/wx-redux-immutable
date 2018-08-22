import * as ActionTypes from '../actions/index'
import { Map, List, fromJS } from '../public/libs/immutable'

export default (state = fromJS({
  fetching: false,
  error: false,
  data: fromJS([])
}), action) => {

  if (action.type === ActionTypes.FETCH_WECHAT_USERS_SUCCESS) {
    const {wechatUsers} = action.response
  
    return state.merge({
      fetching: false,
      error: false,
      data: fromJS(wechatUsers)
    })
  } else if (action.type === ActionTypes.FETCH_WECHAT_USERS_REQUEST) {
    return state.merge({
      fetching: true,
      error: false
    })
  } else if (action.type === ActionTypes.FETCH_WECHAT_USERS_FAILURE){
    return state.merge({
      fetching: false,
      error: true
    })
  }

  return state
}