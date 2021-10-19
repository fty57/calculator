import React from 'react'
import {Text, Button, StyleSheet, TouchableHighlight, Dimensions} from 'react-native'

export default props =>{
     return(
          <TouchableHighlight onPress={props.OnClick}>
               <Text style={styles.button}>{props.label}</Text>
          </TouchableHighlight>
     )
}

const styles = StyleSheet.create({
     button: {
          fontSize: 40,
          height: Dimensions.get("window").width / 4,
          width: Dimensions.get("window").width / 4,
          padding: 20,
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          borderWidth: 1,
          borderColor: "#888"
     }
})

