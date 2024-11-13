import React from 'react'
import { Alert, StyleSheet, View, Text } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import {Button, ButtonTray} from '../components/UI/Button';


const ModuleView = ({module, onDelete, onModify}) => {


    const requestDelete = () => Alert.alert(
        'Delete Warning',
        `Are you sure you want to delete module ${module.ModuleCode} ${module.ModuleName}`,
        [{text: 'Cancel'}, {text: 'Delete', onPress: handleDelete}]
    );

    const handleDelete = () => onDelete(module);


  return (
    <View style={styles.container}>
    <FullWidthImage source={{uri:module.ModuleImage}} style={styles.image} />
    <View style={styles.infoTray}>
      <Text style={styles.boldText}>{module.ModuleCode} {module.ModuleName}</Text>
      <Text style={styles.text}>Level {module.ModuleLevel}</Text>
      <Text style={styles.text}>
        {module.ModuleLeaderName} <Text style={styles.dimText}>(Module Leader)</Text>
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

export default ModuleView


