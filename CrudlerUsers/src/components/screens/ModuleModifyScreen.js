import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ModuleForm from '../../modules/ModuleForm';

const ModuleModifyScreen = ({navigation, route}) => {

  const {module, onModify} = route.params;
;
  const handleCancel = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <ModuleForm originalModule={module} onSubmit={onModify} onCancel={handleCancel}/>
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

export default ModuleModifyScreen;