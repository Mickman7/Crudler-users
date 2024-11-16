import React from 'react'
import { Alert, StyleSheet, View, Text } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import {Button, ButtonTray} from '../components/UI/Button';


const UserView = ({user, onDelete, onModify}) => {


    const requestDelete = () => Alert.alert(
        'Delete Warning',
        `Are you sure you want to delete the user ${user.UserFirstname} ${user.UserLastName}`,
        [{text: 'Cancel'}, {text: 'Delete', onPress: handleDelete}]
    );

    const handleDelete = () => onDelete(user);


  return (
    <View style={styles.container}>
    <FullWidthImage source={{uri:user.UserImageURL}} style={styles.image} />
    <View style={styles.infoTray}>
      <Text style={styles.boldText}>{user.UserFirstname} {user.UserLastname}</Text>
      <Text style={styles.text}>Type: {user.UserType}</Text>
      <Text style={styles.text}>
        {user.UserEmail} <Text style={styles.dimText}>(Email)</Text>
        </Text>
    </View>

    <ButtonTray>
      <Button label='Modify' onClick={onModify}/>
      <Button label='Delete' onClick={requestDelete}/>
    </ButtonTray>
    
  </View>
  )
}



const styles = StyleSheet.create({
  container: {
      gap: 15,
      padding: 10
    },
    infoTray: {
      gap: 5
    },
    text: {
      fontSize: 16
    },
    boldText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    dimText: {
      color: 'grey'
    },
    image: {
      borderRadius: 3
    }
});

export default UserView;