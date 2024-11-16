import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native';



const UserItem = ({user, onSelect}) => {
  return (
      <Pressable onPress={onSelect} style={styles.container}>
          <View style={styles.item}>
            <Text style={styles.text}>
              {user.UserFirstname} {user.UserLastname} ({user.UserType})
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

export default UserItem;
