import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screens';
import UserView from '../../users/UserView';

const UserViewScreen = ({navigation, route}) => {

  const { user, onDelete, onModify } = route.params;

  const gotoModifyScreen = () => navigation.navigate("UserModifyScreen", {user, onModify});

  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={gotoModifyScreen}/>
    </Screen>
  );
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

export default UserViewScreen;