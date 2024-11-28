import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icons from '../components/UI/Icons';
import { useState } from 'react';
import Form from '../components/UI/Form';


const defaultModule = {
    ModuleID: null,
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null,
  };

const ModuleForm = ({originalModule, onSubmit, onCancel}) => {

    defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);

    const levels = [
      {value: 3, label: '3 (Foundation'},
      {value: 4, label: '4 (First Year'},
      {value: 5, label: '5 (Second Year'},
      {value: 6, label: '6 (Third Year'},
      {value: 7, label: '7 (Masters'},
    ];

    const [module, setModule] = useState(originalModule || defaultModule);

    const handleChange = (field, value) => setModule({...module, [field]: value});
    const handleSubmit = () => onSubmit(module);
    

    const submitLabel = originalModule ? 'Modify' : 'Add';
    const submitIcon = originalModule ? <Icons.Edit/> : <Icons.Add />

  return (
    
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
            <Text>{module.ModuleCode} {module.ModuleName}</Text>

      <Form.InputText 
        label='Module Code'
        value={module.ModuleCode}
        onChange={(value) => handleChange('ModuleCode', value)}
      />

        
      <Form.InputText 
        label='Module Name'
        value={module.ModuleName}
        onChange={(value) => handleChange('ModuleName', value)}
      />

      <Form.InputSelect
        label='Module Level' 
        prompt='Select module level ...'
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange('ModuleLevel', value)}
        />

      <Form.InputText 
        label='Module Leader Name'
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange('ModuleLeaderName', value)}
      />

      <Form.InputText 
        label='Module Image URL'
        value={module.ModuleImage}
        onChange={(value) => handleChange('ModuleImage', value)}
      />


    </Form>
  )
}


const styles = StyleSheet.create({ });

export default ModuleForm