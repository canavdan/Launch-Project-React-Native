import {
  FETCHING_LAUNCHES_FAILURE,
  FETCHING_LAUNCHES_REQUEST,
  FETCHING_LAUNCHES_SUCCESS,
  GET_FAV_STATUS,
  FAV_LAUNCHES,
} from '../actions/types'

const initialState = {
  isLoading: false,
  launches: [],
  errorMessage: '',
  isFav: false,
}

const launchReduer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LAUNCHES_REQUEST:
      return { ...state, isLoading: true }
    case FETCHING_LAUNCHES_SUCCESS:
      return { ...state, isLoading: false, launches: action.payload }
    case FETCHING_LAUNCHES_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    case GET_FAV_STATUS:
      return { ...state, isFav: action.payload }
    case FAV_LAUNCHES:
      return { ...state }
    default:
      return state
  }
}
export default launchReduer
