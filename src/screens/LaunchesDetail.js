import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Container, Header, Content, Tab, Tabs, Left, Body, Icon, Title, Button,
} from 'native-base'
import { connect } from 'react-redux'
import LaunchInformation from '../components/LaunchInformation'
import LaunchMissions from '../components/LaunchMissions'
import RocketImage from '../components/RocketImage'
import { favStatus, favLaunch } from '../actions'

class LaunchesDetail extends Component {   
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
      super(props)
    }

   componentDidMount() {
      // this.props.favStatus()
       //const fav = this.props.launch.isFav
   }
   changeFavStatus(launch) {
    //const favStatu = this.props.launch.isFav
    //this.props.favLaunch(this.props.navigation.state.launch, uid, favStatu)
    console.log(launch);  
   }
  render() {
   const { params } = this.props.navigation.state
   const launch = params.launch
   
    return (
      <Container>
           <Header hasTabs style={styles.backGroundWhite} >
          <Left>
            <Button transparent
                onPress={() => this.props.navigation.goBack()}
            >          
                <Icon name='arrow-back' style={styles.colorBlack} />   
            </Button>
          </Left>
          <Body>         
          <Title style={styles.colorBlack}>Launch List</Title>
          </Body>
        </Header>      
      <RocketImage imageUrl={launch.imageUrl} />     
      <Content>
        <Tabs initialPage={0} tabBarUnderlineStyle={styles.backGroundBlack}>
        <Tab heading="Information" activeTabStyle={styles.backGroundPurp} tabStyle={styles.backGroundPurp}>
           <LaunchInformation {...launch} />
          </Tab>
          <Tab heading="Missions" activeTabStyle={styles.backGroundPurp} tabStyle={styles.backGroundPurp}>
            <LaunchMissions {...launch} favStatus={this.props.launch.isFav} 
             onClick={() => { this.changeFavStatus(...launch) }} 
            />
          </Tab>
          
        </Tabs>
        </Content>   
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  colorBlack: {
    color: 'black'
  },
  backGroundWhite: {
    backgroundColor: 'white'
  },
  backGroundBlack: {
    backgroundColor: 'black'
  },
  backGroundPurp: {
    backgroundColor: '#9c0000'
  }
})

const mapStateToProps = state => ({
  launch: state.launch
})
export default connect(mapStateToProps, { favStatus, favLaunch })(LaunchesDetail)
