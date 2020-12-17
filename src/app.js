import React, { lazy, Suspense } from 'react'
import { GoodsProvider } from 'goods-core'
import { kitabisaTheme } from '@kitabisa/assets/styles'
import { registerSW, registerWhyDidYouRender } from '@kitabisa/init'
import { AppProvider } from './context/app.context'

const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ '@kitabisa/pages/home')
)

registerWhyDidYouRender()

const App = () => {
  return (
    <Suspense fallback=''>
      <GoodsProvider theme={kitabisaTheme}>
        <AppProvider>
          <Home />
        </AppProvider>
      </GoodsProvider>
    </Suspense>
  )
}

registerSW()

export default App
