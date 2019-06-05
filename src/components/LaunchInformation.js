import React, { } from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardItem, Text, Container, Content } from 'native-base'

const LaunchInformation = ({ id, status }) => (
<Container>
      <Content>
             <Card>                       
            <CardItem>                                            
                  <Text style={styles.nameText}>LAUNCH ID</Text>                     
            </CardItem>
            <CardItem>                                            
                  <Text>{id}</Text>                     
            </CardItem>   
            <CardItem>                                            
                  <Text style={styles.nameText}>STATUS</Text>                     
            </CardItem>
            <CardItem>                                            
                  <Text>{status}</Text>                     
            </CardItem>          
          </Card>
      </Content>
    </Container>
      
  )

  const styles = StyleSheet.create({
    nameText: {
      fontSize: 20,
      color: 'red',
      marginTop: -5,
    },
  })


export default LaunchInformation
