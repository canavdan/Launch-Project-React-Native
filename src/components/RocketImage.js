/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable max-len */
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Card, CardItem } from 'native-base'

const RocketImage = props => (
  <Card>
    <CardItem cardBody>
      {props.imageUrl ? (
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
      ) : (
        <Image
          source={require('../components/pics/list_placeholder.png')}
          style={styles.image}
        />
      )}
    </CardItem>
  </Card>
)

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    width: null,
  },
  nameText: {
    fontSize: 20,
    color: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default RocketImage
