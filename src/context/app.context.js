import React, {
  useContext,
  createContext,
  useReducer,
  useMemo,
} from 'react'
import produce from 'immer'
import isEqual from 'react-fast-compare'
import { sortBy } from '@kitabisa/utils/helpers'

const initialState = {
  dataMaster: null,
  campaignList: null,
  sortActive: 'order',
}

export const actionsType = {
  SET_CAMPAIGN_LIST: 'SET_CAMPAIGN_LIST',
  SORT_BY: 'SORT_BY',
}

const AppStateContext = createContext(initialState)
const AppDispatchContext = createContext()

const reducer = produce((draft, actions) => {
  const { type, payload = {} } = actions
  switch (type) {
    case actionsType.SET_CAMPAIGN_LIST:
      if (!isEqual(draft.campaignList, payload.campaignList)) {
        const data = sortBy(
          payload.campaignList,
          initialState.sortActive
        )
        draft.dataMaster = data
        draft.campaignList = data
      }
      return
    case actionsType.SORT_BY:
      if (!isEqual(draft.sortActive, payload.sortActive)) {
        const data = sortBy(draft.dataMaster, payload.sortActive)
        draft.campaignList = data
        draft.sortActive = payload.sortActive
      }
      return
    default:
      throw new Error('Unknown action type')
  }
})

const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => [state, dispatch])
  return contextValue
}

export const useAppContext = () => {
  const state = useContext(AppStateContext)
  const dispatch = useContext(AppDispatchContext)
  return [state, dispatch]
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useApp()
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}
