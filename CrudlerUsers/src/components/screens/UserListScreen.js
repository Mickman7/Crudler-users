import {LogBox, ScrollView, StyleSheet, Text, Vibration } from 'react-native';
import Screen from '../layout/Screens.js';
import initialUsers from '../../data/users.js';
import UserItem from '../../users/UserItem.js';
import { useState } from 'react';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';


const UserListScreen = ({navigation}) => {
  const [user, setUser] = useState(initialUsers);
  LogBox.ignoreLogs(['Non-serialized values were found in the navigation state']);

  
  const gotoViewScreen = (user) => navigation.navigate('UserViewScreen', { user, onDelete, onModify });
  const gotoAddScreen = () => {
    Vibration.vibrate(),
    navigation.navigate('UserAddScreen', { onAdd })
  };

  const handleDelete = (deletedUser) => {
    
    if (!user || !Array.isArray(user)) {
        console.error('Users state is not an array or is undefined.');
        return;
      }
    
    setUser(user.filter((item) => item.UserID !== deletedUser.UserID));
    console.log('Deleted UserID:', deletedUser.UserID);
  };

  const onDelete = (deletedUser) => {
    handleDelete(deletedUser);
    navigation.goBack();
  }

  const onAdd = (user) => {
    handleAdd(user);
    navigation.goBack();
  }

  const onModify = (user) => {
    handleModify(user);
    navigation.navigate("UserListScreen");
  }

  const handleAdd = (users) => setUser([...user, users]);


  const handleModify = (updatedUsers) => setUser(
    user.map((user) => (user.UserID === updatedUsers.UserID) ? updatedUsers : user)
  );


  return (
    <Screen>
      <ScrollView style={styles.container}>
      <ButtonTray>
        <Button label='Add' onClick={gotoAddScreen} />
      </ButtonTray>
      {
        user.map((user, index) => (
          <UserItem key={index} user={user} onSelect={() => gotoViewScreen(user)} />
        ))
      }
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  text: {
    fontSize: 16,
  },
});


export default UserListScreen;