import React, { } from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardItem, Text, Container, Content, Icon, Right } from 'native-base'

const LaunchMissions = ({ missionsName, typeName, status }, favStatus, onClick) => (
<Container>
      <Content>
             <Card>                       
             <CardItem>                                            
                  <Text style={styles.nameText}>MISSION NAME</Text>                     
            </CardItem>
            <CardItem>                                            
                  <Text>{missionsName}</Text>                     
            </CardItem>   
            <CardItem>                                            
                  <Text style={styles.nameText}>TYPE</Text> 
                   <Right>
                         {favStatus ? (
                         <Icon name="star" onPress={onClick}
                         style={{ fontSize: 50, color: 'black' }}
                         />) : (
                         <Icon name="star" onPress={onClick}
                         style={{ fontSize: 50, color: '#d5d400' }}
                         />) }
                         
                   </Right>                    
            </CardItem>
            <CardItem>                                            
                  <Text>{typeName}</Text>                     
            </CardItem> 
            <CardItem>                                            
                  <Text style={styles.nameText}>DESCRIPTION</Text>                     
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


export default LaunchMissions
