/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable max-len */
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Card, CardItem, Text } from 'native-base'

const LaunchSummary = props => (
  <Card>
    <CardItem cardBody button onPress={props.onClick}>
      {props.launch.imageUrl ? (
        <Image source={{ uri: props.launch.imageUrl }} style={styles.image} />
      ) : (
        <Image
          source={require('./pics/list_placeholder.png')}
          style={styles.image}
        />
      )}
    </CardItem>
    <CardItem>
      <Text style={styles.nameText}>{props.launch.name}</Text>
    </CardItem>
    <CardItem>
      <Text>
        {props.launch.windowsStart
          ? convertToGmtPlusThree(props.launch.windowsStart)
          : TBD}{' '}
      </Text>
    </CardItem>
  </Card>
)

const convertToGmtPlusThree = inputDateTime => {
  const date = new Date(inputDateTime)
  date.setHours(date.getHours() + 3)
  return date.toGMTString()
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    width: null,
  },
  nameText: {
    marginTop: -5,
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

export default LaunchSummary
