import React from 'react'
import { ScrollView, } from 'react-native';
import ModuleItem from '../modules/ModuleItem';
import initialModules from '../data/modules';



const ModuleList = ({modules, onSelect}) => {
  return (
      <ScrollView style={styles.container}>
      {
        initialModules.map((module) => (
          <ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect}/>
        ))
      }
      </ScrollView>
  )
}

export default ModuleList;