import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import {store} from './Src/store'
import MyComponent from './Src/MyComponent'

const App = () => {
  return (
    <Provider store={store}>
    <MyComponent/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})