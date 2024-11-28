import { StyleSheet, Text, View } from 'react-native';
import UserForm from '../../users/UserForm';

const UserModifyScreen = ({navigation, route}) => {

  const {user, onModify} = route.params;

  const handleCancel = () => navigation.goBack();
  
  return (
    <View style={styles.container}>
      <UserForm originalUsers={user} onSubmit={onModify} onCancel={handleCancel}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserModifyScreen;