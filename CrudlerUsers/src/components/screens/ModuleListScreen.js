import {LogBox, ScrollView, StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screens.js';
import initialModules from '../../data/modules.js';
import ModuleItem from '../../modules/ModuleItem.js';
import { useState } from 'react';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';



// const modules = initialModules;




const ModuleListScreen = ({navigation}) => {
  const [modules, setModules] = useState(initialModules);
  LogBox.ignoreLogs(['Non-serialized values were found in the navigation state']);

  
  const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });

  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    console.log('Deleted ModuleID:', module.ModuleID);
    
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  }

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  }

  const handleAdd = (module) => setModules([...modules, module]);

  
  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  }

  const handleModify = (updatedModule) => setModules(
    modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ? updatedModule : module)
  );


  return (
    <Screen>
      <ScrollView style={styles.container}>
      <ButtonTray>
        <Button label='Add' onClick={gotoAddScreen} />
      </ButtonTray>
      {
        modules.map((module) => (
          <ModuleItem key={module.ModuleID} module={module} onSelect={() => gotoViewScreen(module)} />

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


export default ModuleListScreen;
