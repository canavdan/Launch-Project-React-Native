import React, { Component } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Form,
  Content,
  Text,
  Button,
  Item,
  Input,
  Header,
  Left,
  Icon,
  Body,
  Label,
} from 'native-base'
import Logo from '../components/Logo'
import { createUser } from '../actions'
import Loading from '../components/Loading'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      error: null,
    }
  }

  onCreateAccountPress = () => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (this.state.password.length < 6) {
      this.setState({ error: '!! Password must be min 6 character !!' })
    } else if (!re.test(this.state.email)) {
      this.setState({ error: '!! E-mail is not valid !!' })
    } else {
      this.setState({ error: null })
      this.props.createUser(this.state.email, this.state.password)
      if (this.props.auth.iscreatedUser) {
        this.props.navigation.navigate('SignIn')
      }
    }
  }
  render() {
    const loading = this.props.auth.loading
    if (loading) {
      return <Loading />
    }
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'black' }} />
            </Button>
          </Left>
          <Body />
        </Header>
        <Content>
          <View style={styles.screen}>
            <Logo />
            <KeyboardAvoidingView behavior="padding">
              <Form style={styles.form}>
                <Item>
                  <Input
                    placeholder="Name"
                    value={this.state.name}
                    onChangeText={text => {
                      this.setState({ name: text })
                    }}
                  />
                </Item>

                <Item style={styles.textBox}>
                  <Input
                    placeholder="Surname"
                    value={this.state.surname}
                    onChangeText={text => {
                      this.setState({ surname: text })
                    }}
                  />
                </Item>

                <Item style={styles.textBox}>
                  <Input
                    placeholder="E-mail"
                    value={this.state.email}
                    onChangeText={text => {
                      this.setState({ email: text })
                    }}
                  />
                </Item>

                <Item style={styles.textBox}>
                  <Input
                    placeholder="Password"
                    secureTextEntry
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={text => {
                      this.setState({ password: text })
                    }}
                  />
                </Item>

                <Button
                  block
                  danger
                  style={styles.loginButton}
                  onPress={this.onCreateAccountPress}
                >
                  <Text style={{ color: 'white' }}>SIGN UP</Text>
                </Button>
                {this.state.error ? (
                  <Label style={{ color: 'red', fontSize: 30 }}>
                    {this.state.error}
                  </Label>
                ) : (
                  <Label />
                )}
              </Form>
            </KeyboardAvoidingView>
          </View>
        </Content>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { createUser },
)(SignUp)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
  },
  textBox: {
    color: 'black',
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: '#9c0000',
    marginTop: 25,
    height: 50,
  },
  backButton: {
    alignSelf: 'flex-start',

    height: 25,
  },
})
