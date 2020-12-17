import { useCallback, useReducer } from 'react'
import produce from 'immer'
import isEqual from 'react-fast-compare'

const actionsType = {
  SET_FETCHING: 'SET_FETCHING',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_ERROR: 'SET_ERROR',
}

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const reducer = produce((draft, actions) => {
  const { type, payload = {} } = actions
  switch (type) {
    case actionsType.SET_FETCHING:
      draft.loading = true
      draft.error = null
      return
    case actionsType.SET_SUCCESS:
      if (!isEqual(draft.data, payload.data)) {
        draft.data = payload.data
        draft.loading = false
      }
      return
    case actionsType.SET_ERROR:
      draft.error = payload.error
      draft.loading = false
      return
    default:
      throw new Error('Unknown action type')
  }
})

export const useLazyFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, loading, error } = state

  const fetchData = useCallback((url = '', fetchOptions = {}) => {
    dispatch({
      type: actionsType.SET_FETCHING,
    })
    fetch(url, fetchOptions)
      .then(r => r.json())
      .then(res => {
        dispatch({
          type: actionsType.SET_SUCCESS,
          payload: {
            data: JSON.parse(res.contents).data,
          },
        })
      })
      .catch(err => {
        dispatch({
          type: actionsType.SET_ERROR,
          payload: {
            error: err,
          },
        })
      })
  }, [])

  return [fetchData, { loading, error, data }]
}
