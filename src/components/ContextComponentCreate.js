import React from 'react'

const PropsContext = React.createContext()

/*
// now we can fetch this value from any component. 
// just we need to use consumer like we used in 'ContextComponentC'

PropsContext = React.createContext('vish path')
*/

const PropsProvider = PropsContext.Provider
const PropsConsumer = PropsContext.Consumer

export {PropsProvider, PropsConsumer }
