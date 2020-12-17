import React from 'react'

export function registerSW() {
  if ('serviceWorker' in navigator && !__DEV__) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          console.log('SW registered', '😎 👌')
        })
        .catch(err => {
          console.log('SW registration failed:', '🤦', err.message)
        })
    })
  }
}

export function registerWhyDidYouRender() {
  if (__DEV__) {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      diffNameColor: 'aqua',
      trackAllPureComponents: false,
      titleColor: 'green',
      trackHooks: false,
      logOwnerReasons: true,
      collapseGroups: true,
      exclude: [/(carousel|slider|track|div)/i],
    })
    console.log('why did you render registered', '😄')
  }
}
