import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native'
import React from 'react'
import { useState } from 'react'

import Nav from './Nav'

export default function AddFriend({ navigation }: any) {
  const currentPage = 'AddFriend'

  const [username, onChangeText] = useState('')

  const handlePress = () => {
    console.log('searched!')
  }

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <TextInput
            style={[styles.input, styles.shadow]}
            onChangeText={onChangeText}
            value={username}
            placeholder="Search for username"
            placeholderTextColor={'white'}
          />
        </SafeAreaView>
        <Button title="Add friend" onPress={handlePress} />
      </View>
      <View style={styles.nav}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#dd571c',
  },
  nav: {
    backgroundColor: '#dd571c',
    padding: 30,
    width: '100%',
    alignContent: 'center',
  },
  mainText: {
    color: 'oldlace',
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  image: { width: 200, height: 200 },
  ping: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dd571c',
    paddingTop: 20,
  },
  input: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 70,
    backgroundColor: '#b34e24',
    borderRadius: 50,
  },
  shadow: {
    shadowColor: '#b34e24',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
})
