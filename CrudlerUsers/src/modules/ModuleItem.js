import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native';



const ModuleItem = ({module, onSelect}) => {
  return (
      <Pressable onPress={onSelect} style={styles.container}>
          <View style={styles.item}>
            <Text style={styles.text}>
              {module.ModuleCode} {module.ModuleName}
            </Text>
          </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    item: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: 'lightgrey',
    },
    text: {
      fontSize: 16,
    }
  });

export default ModuleItem