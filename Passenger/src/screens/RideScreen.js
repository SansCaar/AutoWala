import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const RideScreen = ({navigation}) => {
  return (
    <View>
      <Header iconL="arrow-left" onPressL={navigation.goBack} style={{ paddingHorizontal: 24 }} />
        <Text>
            RideScreen
        </Text>
    </View>
  )
}

export default RideScreen

