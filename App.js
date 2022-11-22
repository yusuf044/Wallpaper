import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './Src/navigation/Router'

const App = () => {
  return (
    <View style={{flex:1}}>
    <Router/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})