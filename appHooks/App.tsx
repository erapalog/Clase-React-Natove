import { Text, View } from 'react-native'
import React, { Component } from 'react'
import HookUseStare from './src/screen/FechaComponent/HookUseStare'
import FormUser from './src/screen/userEffect/FormUser/FormUser'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>
        <HookUseStare></HookUseStare>

        <FormUser></FormUser>
      </View>
    )
  }
}