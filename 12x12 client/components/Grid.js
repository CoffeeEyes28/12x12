import React from 'react'
import { StyleSheet } from 'react-native'
import { Box } from 'native-base'


export default function Grid() {
  return (
    <Box style={styles.box}></Box>
  )
}



const styles = StyleSheet.create({
    box: {
        border: 2,
        backgroundColor: '#fff',
        height: 20,
        width: 20
    
      }
})