import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Src/Home'
import { Provider } from 'react-redux'
import store from './Src/store'

const App = () => {
  return (
    <Provider store={store}> 
      <Home/> 
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})