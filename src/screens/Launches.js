/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Content,
} from 'native-base'
import LaunchSummary from '../components/LaunchSummary'
import { fetchLaunches, fetchAuth } from '../actions'

class Launches extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchLaunches()
  }
  navigateToDetail(item) {
    this.props.navigation.navigate('LaunchesDetail', {
      launch: item,
    })
  }
  render() {
    return (
      <Container>
        <Header style={styles.backGroundWhite}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={styles.colorBlack} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.colorBlack}>Launch List</Title>
          </Body>
        </Header>
        <Content>
          <FlatList
            data={this.props.launch.launches}
            initialNumToRender={10}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <LaunchSummary
                launch={item}
                key={item.id}
                onClick={() => {
                  this.navigateToDetail(item)
                }}
              />
            )}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  launch: state.launch,
})

const styles = StyleSheet.create({
  colorBlack: {
    color: 'black',
  },
  backGroundWhite: {
    backgroundColor: 'white',
  },
})

export default connect(
  mapStateToProps,
  { fetchLaunches, fetchAuth },
)(Launches)
