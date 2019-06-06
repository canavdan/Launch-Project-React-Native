/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import logoImg from '../components/pics/logo_hitit.png'

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} resizeMode="stretch" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 100,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
})
