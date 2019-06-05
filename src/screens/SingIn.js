import React, { Component } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import {
  Container, Form, Content, Text, Button, Item, Input } from 'native-base'
import { loginUser } from '../actions'
import Logo from '../components/Logo'
import Loading from '../components//Loading'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        email: '',
        password: '',
    }
}

  onLoginPress = () => {
    this.props.loginUser(this.state.email, this.state.password)
        if (this.props.auth.loggedIn) {      
        this.props.navigation.navigate('Launches')
      } 
}
 
  render() {
    const loading = this.props.auth.loading
    if (loading) { 
      return (<Loading />) 
    }
    return (
      <Container>
        <Content>
          <View style={styles.screen}>        
              <Logo /> 
              <KeyboardAvoidingView behavior="padding">             
                <Form style={styles.form}> 
                  <Item
                   rounded             
                  >                                      
                    <Input placeholder="E-mail" value={this.state.email}                                  
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    />
                  </Item>

                  <Item                    
                    rounded                 
                    style={styles.password}                                      
                  >                                   
                    <Input placeholder="Password"
                    secureTextEntry
                     autoCorrect={false} 
                     value={this.state.password}
                     onChangeText={(text) => { this.setState({ password: text }) }}
                    />
                  </Item>

                  <Button block rounded danger style={styles.loginButton} onPress={this.onLoginPress} >             
                    <Text style={{ color: 'white' }}>LOG IN</Text>
                  </Button>
                                 
                    <Button transparent style={styles.registerButton} onPress={() => this.props.navigation.navigate('SignUp')} >
                    <Text style={{ color: 'black', textDecorationLine: 'underline' }} >Sign Up</Text>
                    </Button>
               
                </Form>
            </KeyboardAvoidingView>         
          </View>
        </Content>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(
  SignIn,
)

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,    
        justifyContent: 'center',       
      },
    form: {
      flex: 1,     
      justifyContent: 'center',
      paddingTop: 25
    },
    password: {
     color: 'black',
     marginTop: 25,
    
    },
    loginButton: {
        backgroundColor: '#9c0000',
        marginTop: 25,
        height: 50
    },  
    registerButton: {
        marginTop: 25,
        alignSelf: 'flex-end' 
    },  
  })
